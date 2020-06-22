import { object, string, mixed, lazy, boolean, number, array, Schema } from "yup";
import { ApiVersion } from "./types";

/**
 * Default number of metafields to fetch
 * when no specified
 */
const DEFAULT_METAFIELD_COUNT = 100;

export interface PluginMetafieldConfig {
  /**
   * Property the metafield can be accessed on
   * Defaults to metafield{Namespace}{Key}
   */
  name: string;

  /**
   * Namespace of the Shopify metafield to include
   */
  namespace: string;

  /**
   * Key of the Shopify metafield to include
   */
  key: string;
}

/**
 * Configure the metafield fetching for a specific resource
 * - false                   => Don't fetch metafields
 * - number                  => Fetch n metafields
 * - PluginMetafieldConfig[] => Fetch these metafields
 */
export type PluginMetafieldOption = boolean | number | PluginMetafieldConfig[];

const PLUGIN_METAFIELD_CONFIG_SCHEMA = lazy<PluginMetafieldOption>((rawValue): Schema<PluginMetafieldOption> => {
  const value = rawValue as unknown;
  if (value === undefined || value === null || value === false) {
    return boolean().default(false);
  }
  if (value === true || typeof value === 'number') {
    return number().transform((value, originalValue) => { if (originalValue === true) {
      return DEFAULT_METAFIELD_COUNT;
      
    } return value }).integer();
  }
  return array(object<PluginMetafieldConfig>({
    namespace: string().required(),
    key: string().required(),
    name: string().required(),
  }))
});

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

  /**
   * Product metafield configuration
   */
  productMetafields: PluginMetafieldOption;

  /**
   * Indicate if you are Shopify plus
   * This will change the rate limits
   */
  shopifyPlus: boolean;
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
  productMetafields: PLUGIN_METAFIELD_CONFIG_SCHEMA,
  shopifyPlus: boolean().default(false),
});

export function parseConfig(input: unknown): PluginConfig {
  const config = PLUGIN_CONFIG_SCHEMA.validateSync(input);

  return {
    ...config,
    storefrontShopDomain: config.storefrontShopDomain ?? config.myshopifyDomain,
  };
}
