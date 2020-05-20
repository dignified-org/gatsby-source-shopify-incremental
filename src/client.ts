import axios, { AxiosInstance } from 'axios';
import Bottleneck from 'bottleneck';

import { PluginConfig } from './config';
import { ApiVersion } from './types';

export interface GQLClient {
  <QueryResult, Variables>(query: string, variables?: Variables): Promise<
    QueryResult
  >;
}

export interface Client {
  admin: AxiosInstance;
  storefront: GQLClient;
  version: ApiVersion;
}

export function createClient(config: PluginConfig): Client {
  const {
    apiVersion,
    myshopifyDomain,
    adminAccessToken,
    storefrontShopDomain,
    storefrontAccessToken,
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
  const storefrontLimiter = new Bottleneck({
    minTime: 100,
    maxConcurrent: 3, // TODO Test this later
    strategy: Bottleneck.strategy.BLOCK,
    // TODO 240 for plus
    reservoir: 120, // 60 seconds with min cost of 0.5s
    reservoirIncreaseInterval: 1000,
    reservoirIncreaseAmount: 2,
    reservoirIncreaseMaximum: 120,
  });

  const storefront: GQLClient = async <QueryResult, Variables = any>(
    query: string,
    variables: Variables,
  ) => {
    const startTime = Date.now();

    const { data: responseBody } = await storefrontLimiter.schedule(() =>
      storefrontClient({
        data: {
          query,
          variables,
        },
      }),
    );

    // Remove extra cost from the reservoir
    const cost =
      Math.ceil(Math.max(500, Date.now() - startTime) / 1000) * 2 - 2;
    if (cost > 0) {
      storefrontLimiter.incrementReservoir(0 - cost);
    }

    if (!responseBody.data) {
      // TODO handle retry in bottleneck
      throw new Error('TIMEOUT');
    }

    return responseBody.data as QueryResult;
  };

  return { storefront, admin, version: apiVersion };
}
