import { Client } from '../client';
import {
  LoadProductsQuery,
  LoadProductsQueryVariables,
  LoadProductsByIdsQuery,
  LoadProductsByIdsQueryVariables,
} from './types';
import { ApiVersion, QueryResult } from '../types';
import { productFragment } from '../fragments';
import { fetchAllNodesFactory } from './util';

function productsQuery(version: ApiVersion) {
  return /* GraphQL */ `
    ${productFragment(version)}
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
}

async function fetchStorefrontProducts(
  client: Client,
  variables: LoadProductsQueryVariables,
) {
  const data = await client.storefront<
    LoadProductsQuery,
    LoadProductsQueryVariables
  >(productsQuery(client.version), variables);

  return data.products;
}

export const loadAllStorefrontProducts = fetchAllNodesFactory(
  fetchStorefrontProducts,
);

function productsByIdsQuery(version: ApiVersion) {
  return /* GraphQL */ `
    ${productFragment(version)}
    query LoadProductsByIds($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on Product {
          ...ProductNode
        }
      }
    }
  `;
}

export async function fetchStorefrontProductsByIds(
  client: Client,
  ids: string[],
) {
  const variables: LoadProductsByIdsQueryVariables = { ids };

  const data = await client.storefront<
    LoadProductsByIdsQuery,
    LoadProductsByIdsQueryVariables
  >(productsByIdsQuery(client.version), variables);

  return data.nodes;
}
