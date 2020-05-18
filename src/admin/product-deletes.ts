import { Client } from '../client';
import { ProductDeletesQueryVariables, ProductDeletesQuery } from './types';
import { QueryResult } from '../types';
import { batchAllNodesFactory } from './util';

const PRODUCT_DELETES_QUERY = /* GraphQL */ `
  query ProductDeletes($first: Int!, $after: String, $query: String) {
    deletionEvents(
      first: $first
      after: $after
      query: $query
      subjectTypes: [PRODUCT]
      sortKey: CREATED_AT
      reverse: true
    ) {
      edges {
        cursor
        node {
          occurredAt
          subjectId
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

async function fetchAdminProductDeletes(
  client: Client,
  variables: ProductDeletesQueryVariables,
) {
  const { data } = (await client.admin({
    url: '/graphql.json',
    method: 'post',
    data: {
      query: PRODUCT_DELETES_QUERY,
      variables,
    },
  })) as QueryResult<ProductDeletesQuery>;

  return data.data.deletionEvents;
}


function con(node: ProductDeletesQuery['deletionEvents']['edges'][0]['node'], since: Date) {
  return new Date(node.occurredAt) > since;
}

function vars(since: Date) {
  const hourSlug = since.toISOString().substring(0, 13);
  const query = `occurred_at:>${hourSlug}`;
  return {
    query,
  }
}

/**
 * Generates product deletes in batches of 50
 */
export const adminProductDeletes = batchAllNodesFactory(fetchAdminProductDeletes, con, vars);
