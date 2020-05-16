import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

import { PluginConfig } from "./config";

export interface Client {
  admin: AxiosInstance;
  storefront: AxiosInstance;
}

export function createClient(config: PluginConfig): Client {
  const { apiVersion, myshopifyDomain, adminAccessToken, storefrontShopDomain, storefrontAccessToken } = config;

  const admin = axios.create({
    baseURL: `https://${myshopifyDomain}/admin/api/${apiVersion}`,
    headers: {
      'X-Shopify-Access-Token': adminAccessToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });

  const storefront = axios.create({
    baseURL: `https://${storefrontShopDomain}/api/${apiVersion}/graphql`,
    method: 'post',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });

  // Incremental backoff
  // TODO handle 429 and cost extension
  axiosRetry(admin, { retryDelay: axiosRetry.exponentialDelay});
  axiosRetry(storefront, { retryDelay: axiosRetry.exponentialDelay});

  return { storefront, admin };
}