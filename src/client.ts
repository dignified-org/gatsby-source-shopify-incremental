import axios, { AxiosInstance } from 'axios';
import Bottleneck from 'bottleneck';

import { PluginConfig } from './config';
import { ApiVersion, GatsbyReporter } from './types';

export interface GQLClient {
  <QueryResult, Variables>(
    name: string,
    query: string,
    variables?: Variables,
  ): Promise<QueryResult>;
}

export interface Client {
  admin: AxiosInstance;
  storefront: GQLClient;
  version: ApiVersion;
  destroy: () => void;
}

export function createClient(
  config: PluginConfig,
  reporter: GatsbyReporter,
): Client {
  const {
    apiVersion,
    myshopifyDomain,
    adminAccessToken,
    storefrontShopDomain,
    storefrontAccessToken,
    shopifyPlus,
  } = config;

  // Implement weird cost based leaky bucket for gql
  // https://shopify.dev/concepts/about-apis/rate-limits#graphql-admin-api-rate-limits
  // Implement leaky bucket for rest
  // https://shopify.dev/concepts/about-apis/rate-limits#rest-admin-api-rate-limits
  const admin = axios.create({
    baseURL: `https://${myshopifyDomain}/admin/api/2020-04`,
    headers: {
      'X-Shopify-Access-Token': adminAccessToken,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  admin.interceptors.response.use(
    function (response) {
      if (response.data.errors) {
        throw new Error(`Shopify admin API responded with error: ${JSON.stringify(response.data.errors)}`)
      }

      return response;
    }
  );

  const storefrontClient = axios.create({
    baseURL: `https://${storefrontShopDomain}/api/${apiVersion}/graphql`,
    method: 'post',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // Implement weird time based leaky bucket
  // https://shopify.dev/concepts/about-apis/rate-limits#storefront-api-rate-limits
  const settings = {
    minTime: 100,
    maxConcurrent: 3,
    strategy: Bottleneck.strategy.BLOCK,
    reservoir: shopifyPlus ? 120 : 60, // 60 seconds with min cost of 0.5s (assume starting with half)
    reservoirIncreaseInterval: 1000,
    reservoirIncreaseAmount: 2,
    reservoirIncreaseMaximum: shopifyPlus ? 240 : 120,
  };
  const storefrontLimiter = new Bottleneck(settings);

  async function currentReservoir() {
    return (await storefrontLimiter.currentReservoir()) ?? 0;
  }

  async function decrementReservoir(amount: number) {
    const current = await currentReservoir();
    if (current - amount > 0) {
      await storefrontLimiter.incrementReservoir(0 - amount);
    } else {
      await storefrontLimiter.incrementReservoir(current);
    }
  }

  const storefront: GQLClient = async <QueryResult, Variables = any>(
    name: string,
    query: string,
    variables: Variables,
  ) => {
    reporter.verbose(
      `[Shopify] Scheduling storefront graphql request "${name}" (reservoir: ${await currentReservoir()})`,
    );

    return await storefrontLimiter.schedule({ id: name }, async () => {
      reporter.verbose(
        `[Shopify] Executing storefront graphql request "${name}" (reservoir: ${await currentReservoir()})`,
      );
      const startTime = Date.now();
      const { data: responseBody } = await storefrontClient({
        data: {
          query,
          variables,
        },
      });

      reporter.verbose(
        `[Shopify] Storefront graphql request "${name}" took ${
          Date.now() - startTime
        }ms`,
      );

      // Remove extra cost from the reservoir
      const cost =
        Math.ceil(Math.max(500, Date.now() - startTime) / 1000) * 2 - 2;

      if (cost > 0) {
        reporter.verbose(
          `[Shopify] Deducting additional ${cost} from storefront reservoir`,
        );
        await decrementReservoir(cost);
      }

      if (!responseBody.data) {
        throw new Error('TIMEOUT');
      }

      reporter.verbose(
        `[Shopify] Storefront graphql request "${name}" complete`,
      );
      return responseBody.data as QueryResult;
    });
  };

  storefrontLimiter.on('error', async (error: Error) => {
    reporter.panic(`[Shopify] Storefront graphql request failed:`, error);
    return null;
  });

  storefrontLimiter.on('failed', async (error: Error, jobInfo) => {
    const name = jobInfo.options.id;
    if (error.message === 'TIMEOUT') {
      if (jobInfo.retryCount < 5) {
        const delay = 1000 * 2 ** jobInfo.retryCount;
        reporter.verbose(
          `[Shopify] Storefront graphql request "${name}" timeout, retrying in ${delay}ms`,
        );
        return delay;
      }
      reporter.panic(
        `[Shopify] Storefront graphql request "${name}" exceeded maximum retry count`,
      );
      return null;
    }

    reporter.panic(
      `[Shopify] Storefront graphql request "${name}" failed:`,
      error,
    );
    return null;
  });

  function destroy() {
    storefrontLimiter.disconnect();
  }

  return { storefront, admin, version: apiVersion, destroy };
}
