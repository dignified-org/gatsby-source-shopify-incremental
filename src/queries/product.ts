import { Client } from '../client';
import { LoadProductsQuery, LoadProductsQueryVariables } from './types';
import { QueryResult } from '.';
import { ApiVersion } from '../types';
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
  const { data } = (await client.storefront({
    data: {
      query: productsQuery(client.version),
      variables,
    },
  })) as QueryResult<LoadProductsQuery>;

  return data.data.products;
}

export const loadAllStorefrontProducts = fetchAllNodesFactory(
  fetchStorefrontProducts,
);
