import { Client } from '../client';
import { ProductUpdatesQueryVariables, ProductUpdatesQuery } from './types';
import { QueryResult } from '../types';
import { batchAllNodesFactory } from './util';

const PRODUCT_UPDATES_QUERY = /* GraphQL */ `
  query ProductUpdates($first: Int!, $after: String, $query: String) {
    products(
      first: $first
      after: $after
      query: $query
      sortKey: UPDATED_AT
      reverse: true
    ) {
      edges {
        cursor
        node {
          id
          storefrontId
          published: publishedOnCurrentPublication
          updatedAt
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

async function fetchAdminProductUpdates(
  client: Client,
  variables: ProductUpdatesQueryVariables,
) {
  const { data } = (await client.admin({
    url: '/graphql.json',
    method: 'post',
    data: {
      query: PRODUCT_UPDATES_QUERY,
      variables,
    },
  })) as QueryResult<ProductUpdatesQuery>;

  return data.data.products;
}

function con(
  node: ProductUpdatesQuery['products']['edges'][0]['node'],
  since: Date,
) {
  return new Date(node.updatedAt) > since;
}

function vars(since: Date) {
  const hourSlug = since.toISOString().substring(0, 13);
  const query = `updated_at:>${hourSlug}`;
  return {
    query,
  };
}

/**
 * Generates product updates in batches of 50
 */
export const adminProductUpdates = batchAllNodesFactory(
  fetchAdminProductUpdates,
  con,
  vars,
);
