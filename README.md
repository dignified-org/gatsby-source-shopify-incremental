## Description

This is in **alpha** - use at your own risk

This source plugin aims to improve over the existing `gatsby-source-shopify` by supporting incremental data fetching. This means that your **first** build will be just as long but subsequent builds will only need to fetch data that has changed. In my testing on store with 1024 products, initial builds take around 90s and subsequent are around 10s.

This plugin also supports incremental builds. In order to try out incremental builds, ensure the `GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES` environment variable is `true`.

```shell
GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true yarn build --log-pages
```

Currently only products and collections are incrementally fetched. I have plans to support pages, blogs, and articles as well but they are lower priority (and use a completely different method).  

### Changes from gatsby-source-shopify
1. No longer import article comments
1. Product options are no longer their own node
1. No support for running images through sharp - plan to support in future
1. Added deprecated messages to fields deprecated in storefront api
1. Added some new fields that are not yet in `gatsby-source-shopify`
1. Rate limit storefront api requests (still testing - but consistent)
1. Verbose logs can now be seen by adding the `--verbose` cli option
1. Added more relationships between nodes (product from variant)
1. Incremental data fetching (obviously) 

## How to install

```shell
npm install gatsby-source-shopify-incremental
# or
yarn add gatsby-source-shopify-incremental
```

TODO

## Available options (if any)

```ts
interface Config {
  /**
   * The *.myshopify.com domain of your Shopify store
   * Required filed
   * Example `my-shop.myshopify.com`
   */
  myshopifyDomain: string;

  /**
   * A valid admin access token for your Shopify store
   * It must be created by the same sales channel as the
   * storefrontAccessToken
   * Required scopes (Read access):
   * - Products
   * - Product listings
   * - Resource feedback
   * - Store content
   * - Online Store pages
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
   * Example `my-shop.com`
   */
  storefrontShopDomain: string;

  /**
   * Shopify api version to use
   * Optional - defaults to 2020-04
   */
  apiVersion: ApiVersion;

  /**
   * Import Shopify collections
   * Optional - default to true
   */
  includeCollections: boolean;

  /**
   * Import Shopify pages
   * Optional - default to false
   */
  includePages: boolean;

  /**
   * Import Shopify blogs
   * Optional - default to false
   */
  includeBlogs: boolean;

  /**
   * Indicate if you are Shopify plus
   * This will change the rate limits
   * Optional - default to false
   */
  shopifyPlus: boolean;
}
```

## How to query for data (source plugins only)

For now please reference the `gatsby-source-shopify` plugin. Querying should be essentially the same.

## How to run tests

```shell
yarn install
yarn test
```

## How to develop locally
1. Install dependencies
    ```shell
    yarn install
    ```
1. Link the repo
    ```shell
    yarn link
    ```
1. Start the file watcher
    ```shell
    yarn watch
    ```
1. From a configured gatsby site
    ```shell
    yarn link "gatsby-source-shopify-incremental"
    ```

Your gatsby site will now use the local version of this plugin

Additional commands:
- Run prettier
    ```shell
    yarn format
    ```
- Update generated graphql types
    ```shell
    yarn gen
    ```
- Build a release
    ```shell
    yarn build
    ```

## How to contribute
