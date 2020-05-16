import { Client } from '../client';
import { LoadProductsQuery, LoadProductsQueryVariables } from './types';
import { QueryResult } from '.';

const PRODUCT_VARIANT_FRAGMENT = /* GraphQL */ `
  fragment ProductVariantNode on ProductVariant {
    availableForSale
    compareAtPrice
    compareAtPriceV2 {
      amount
      currencyCode
    }
    id
    image {
      altText
      id
      originalSrc
    }
    metafields(first: 250) {
      edges {
        node {
          description
          id
          key
          namespace
          value
          valueType
        }
      }
    }
    price
    priceV2 {
      amount
      currencyCode
    }
    requiresShipping
    selectedOptions {
      name
      value
    }
    sku
    title
    weight
    weightUnit
    presentmentPrices(first: 250) {
      edges {
        node {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

const PRODUCT_FRAGMENT = /* GraphQL */ `
  ${PRODUCT_VARIANT_FRAGMENT}
  fragment ProductNode on Product {
    availableForSale
    createdAt
    description
    descriptionHtml
    handle
    id
    images(first: 250) {
      edges {
        node {
          id
          altText
          originalSrc
        }
      }
    }
    metafields(first: 250) {
      edges {
        node {
          description
          id
          key
          namespace
          value
          valueType
        }
      }
    }
    onlineStoreUrl
    options {
      id
      name
      values
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    productType
    publishedAt
    tags
    title
    updatedAt
    variants(first: 250) {
      edges {
        node {
          ...ProductVariantNode
        }
      }
    }
    vendor
  }
`;

export const PRODUCTS_QUERY = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query LoadProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...ProductNode
        }
      }
    }
  }
`;

async function fetchStorefrontProducts(client: Client, variables: LoadProductsQueryVariables) {
  const { data } = await client.storefront({
    data: {
      query: PRODUCTS_QUERY,
      variables,
    }
  }) as QueryResult<LoadProductsQuery>;

  return data.data.products;
}

export async function* loadStorefrontProducts(client: Client) {
  let { edges, pageInfo: { hasNextPage } } = await fetchStorefrontProducts(client, {
    first: 250
  });

  while(edges.length) {
    const edge = edges.pop();

    if (!edge) {
      throw new Error('Assert');
    }

    yield edge.node;

    if (!edges.length && hasNextPage) {
      ({ edges, pageInfo: { hasNextPage } } = await fetchStorefrontProducts(client, {
        first: 250,
        after: edge.cursor,
      }));
    }
  }
}
