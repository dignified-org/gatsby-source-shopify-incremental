import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

import { PluginConfig } from "./config";
import { ApiVersion } from './types';

export interface Client {
  admin: AxiosInstance;
  storefront: AxiosInstance;
  version: ApiVersion;
}

export function createClient(config: PluginConfig): Client {
  const { apiVersion, myshopifyDomain, adminAccessToken, storefrontShopDomain, storefrontAccessToken } = config;

  const admin = axios.create({
    baseURL: `https://${myshopifyDomain}/admin/api/2020-04`,
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

  // Exponential backoff
  // TODO handle 429 and cost extension
  axiosRetry(admin, { retries: 5, retryDelay: axiosRetry.exponentialDelay });
  axiosRetry(storefront, { retries: 5, retryDelay: axiosRetry.exponentialDelay});

  return { storefront, admin, version: apiVersion };
}