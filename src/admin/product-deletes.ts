import { Client } from '../client';
import { ProductDeletesQueryVariables, ProductDeletesQuery } from './types';
import { QueryResult } from '../types';

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

/**
 * Generates product updates in batches of 50
 */
export async function* adminProductDeletes(client: Client, since: Date) {
  const hourSlug = since.toISOString().substring(0, 13);
  const query = `occurred_at:>${hourSlug}`;
  let {
    edges,
    pageInfo: { hasNextPage },
  } = await fetchAdminProductDeletes(client, {
    first: 250,
    query,
  });

  while (1) {
    if (!edges.length) {
      break;
    }

    const batch = [];

    while (1) {
      if (batch.length === 50 || !edges.length) {
        break;
      }

      const edge = edges.shift();

      if (!edge) {
        throw new Error('Assert');
      }

      if (new Date(edge.node.occurredAt) < since) {
        yield batch;
        return;
      }
      batch.push(edge);
    }

    yield batch;

    if (edges.length < 50 && hasNextPage) {
      ({
        edges,
        pageInfo: { hasNextPage },
      } = await fetchAdminProductDeletes(client, {
        first: 250,
        query,
        after: edges.length
          ? edges[edges.length - 1].cursor
          : batch[batch.length - 1].cursor,
      }));
    }
  }
}
