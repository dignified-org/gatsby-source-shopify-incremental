import { Client } from '../client';
import { ProductUpdatesQueryVariables, ProductUpdatesQuery } from './types';
import { QueryResult } from '../types';

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

/**
 * Generates product updates in batches of 50
 */
export async function* adminProductUpdates(client: Client, since: Date) {
  const hourSlug = since.toISOString().substring(0, 13);
  const query = `updated_at:>${hourSlug}`;

  let {
    edges,
    pageInfo: { hasNextPage },
  } = await fetchAdminProductUpdates(client, {
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

      if (new Date(edge.node.updatedAt) < since) {
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
      } = await fetchAdminProductUpdates(client, {
        first: 250,
        query,
        after: edges.length
          ? edges[edges.length - 1].cursor
          : batch[batch.length - 1].cursor,
      }));
    }
  }
}
