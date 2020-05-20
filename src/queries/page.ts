import { Client } from '../client';
import { QueryResult, ApiVersion } from '../types';
import { LoadPagesQuery, LoadPagesQueryVariables } from './types';
import { fetchAllNodesFactory } from './util';
import { pageFragment } from '../fragments';

export function pagesQuery(version: ApiVersion) {
  return /* GraphQL */ `
    ${pageFragment(version)}
    query LoadPages($first: Int!, $after: String) {
      pages(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...PageNode
          }
        }
      }
    }
  `;
}

async function fetchStorefrontPages(
  client: Client,
  variables: LoadPagesQueryVariables,
  page: number,
) {
  const data = await client.storefront<LoadPagesQuery, LoadPagesQueryVariables>(
    `pages-${page}`,
    pagesQuery(client.version),
    variables,
  );

  return data.pages;
}

export const loadAllStorefrontPages = fetchAllNodesFactory(
  fetchStorefrontPages,
);
