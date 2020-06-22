import { Client } from '../client';
import {
  CollectionUpdatesQueryVariables,
  CollectionUpdatesQuery,
} from './types';
import { QueryResult } from '../types';
import { batchAllNodesFactory } from './util';

const COLLECTION_UPDATES_QUERY = /* GraphQL */ `
  query CollectionUpdates($first: Int!, $after: String, $query: String) {
    collections(
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

async function fetchAdminCollectionUpdates(
  client: Client,
  variables: CollectionUpdatesQueryVariables,
) {
  const { data } = (await client.admin({
    url: '/graphql.json',
    method: 'post',
    data: {
      query: COLLECTION_UPDATES_QUERY,
      variables,
    },
  })) as QueryResult<CollectionUpdatesQuery>;

  return data.data.collections;
}

function con(
  node: CollectionUpdatesQuery['collections']['edges'][0]['node'],
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
export const adminCollectionUpdates = batchAllNodesFactory(
  fetchAdminCollectionUpdates,
  con,
  vars,
);
