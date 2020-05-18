import { Client } from '../client';
import {
  CollectionDeletesQueryVariables,
  CollectionDeletesQuery,
} from './types';
import { QueryResult } from '../types';
import { batchAllNodesFactory } from './util';

// TODO merge with product deletes query

const COLLECTION_DELETES_QUERY = /* GraphQL */ `
  query CollectionDeletes($first: Int!, $after: String, $query: String) {
    deletionEvents(
      first: $first
      after: $after
      query: $query
      subjectTypes: [COLLECTION]
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

async function fetchAdminCollectionDeletes(
  client: Client,
  variables: CollectionDeletesQueryVariables,
) {
  const { data } = (await client.admin({
    url: '/graphql.json',
    method: 'post',
    data: {
      query: COLLECTION_DELETES_QUERY,
      variables,
    },
  })) as QueryResult<CollectionDeletesQuery>;

  return data.data.deletionEvents;
}

function con(
  node: CollectionDeletesQuery['deletionEvents']['edges'][0]['node'],
  since: Date,
) {
  return new Date(node.occurredAt) > since;
}

function vars(since: Date) {
  const hourSlug = since.toISOString().substring(0, 13);
  const query = `occurred_at:>${hourSlug}`;
  return {
    query,
  };
}

/**
 * Generates collection deletes in batches of 50
 */
export const adminCollectionDeletes = batchAllNodesFactory(
  fetchAdminCollectionDeletes,
  con,
  vars,
);
