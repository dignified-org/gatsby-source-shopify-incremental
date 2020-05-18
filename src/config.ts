import { object, string, mixed, boolean } from 'yup';
import { ApiVersion } from './types';

/**
 * Inernal populated config
 */
export interface PluginConfig {
  /**
   * The *.myshopify.com domain of your Shopify store
   * @example my-shop.myshopify.com
   */
  myshopifyDomain: string;

  /**
   * A valid admin access token for your Shopify store
   * It must be created by the same sales channel as the
   * storefrontAccessToken
   * Required scopes read_products
   */
  adminAccessToken: string;

  /**
   * A valid storefront access token for your Shopify store
   * It must be created by the same sales channel as the
   * adminAccessToken
   */
  storefrontAccessToken: string;

  /**
   * If your storefront domain is not the default
   * *.myshopify domain
   * @example my-shop.com
   */
  storefrontShopDomain: string;

  /**
   * Shopify api version to use
   */
  apiVersion: ApiVersion;

  /**
   * Import Shopify collections
   */
  includeCollections: boolean;

  /**
   * Import Shopify pages
   */
  includePages: boolean;

  /**
   * Import Shopify blogs
   */
  includeBlogs: boolean;
}

const PLUGIN_CONFIG_SCHEMA = object({
  myshopifyDomain: string().required(),
  adminAccessToken: string().required(),
  storefrontAccessToken: string().required(),
  storefrontShopDomain: string().optional(),
  apiVersion: mixed<ApiVersion>()
    .oneOf([ApiVersion.Apr2020, ApiVersion.Jul2020])
    .default(ApiVersion.Apr2020),
  includeCollections: boolean().default(true),
  includePages: boolean().default(false),
  includeBlogs: boolean().default(false),
});

export function parseConfig(input: unknown): PluginConfig {
  const config = PLUGIN_CONFIG_SCHEMA.validateSync(input);

  return {
    ...config,
    storefrontShopDomain: config.storefrontShopDomain ?? config.myshopifyDomain,
  };
}
