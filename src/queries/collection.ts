import { Client } from '../client';
import {
  LoadCollectionsQuery,
  LoadCollectionsQueryVariables,
  LoadCollectionsByIdsQueryVariables,
  LoadCollectionsByIdsQuery,
} from './types';
import { ApiVersion, QueryResult } from '../types';
import { collectionFragment } from '../fragments';
import { fetchAllNodesFactory } from './util';

function collectionsQuery(version: ApiVersion) {
  return /* GraphQL */ `
    ${collectionFragment(version)}
    query LoadCollections($first: Int!, $after: String) {
      collections(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...CollectionNode
          }
        }
      }
    }
  `;
}

async function fetchStorefrontCollections(
  client: Client,
  variables: LoadCollectionsQueryVariables,
  page: number,
) {
  const data = await client.storefront<
    LoadCollectionsQuery,
    LoadCollectionsQueryVariables
  >(`collections-${page}`, collectionsQuery(client.version), variables);

  return data.collections;
}

export const loadAllStorefrontCollections = fetchAllNodesFactory(
  fetchStorefrontCollections,
);

function collectionsByIdsQuery(version: ApiVersion) {
  return /* GraphQL */ `
    ${collectionFragment(version)}
    query LoadCollectionsByIds($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on Collection {
          ...CollectionNode
        }
      }
    }
  `;
}

export async function fetchStorefrontCollectionsByIds(
  client: Client,
  ids: string[],
) {
  const variables: LoadCollectionsByIdsQueryVariables = { ids };

  const data = await client.storefront<
    LoadCollectionsByIdsQuery,
    LoadCollectionsByIdsQueryVariables
  >('collections-by-ids', collectionsByIdsQuery(client.version), variables);

  return data.nodes;
}
