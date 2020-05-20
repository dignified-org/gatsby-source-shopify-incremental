import { Client } from '../client';
import { QueryResult, ApiVersion } from '../types';
import { LoadBlogsQuery, LoadBlogsQueryVariables } from './types';
import { fetchAllNodesFactory } from './util';
import { blogFragment } from '../fragments';

export function blogsQuery(version: ApiVersion) {
  return /* GraphQL */ `
    ${blogFragment(version)}
    query LoadBlogs($first: Int!, $after: String) {
      blogs(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...BlogNode
          }
        }
      }
    }
  `;
}

async function fetchStorefrontBlogs(
  client: Client,
  variables: LoadBlogsQueryVariables,
) {
  const data = await client.storefront<LoadBlogsQuery, LoadBlogsQueryVariables>(
    blogsQuery(client.version),
    variables,
  );

  return data.blogs;
}

export const loadAllStorefrontBlogs = fetchAllNodesFactory(
  fetchStorefrontBlogs,
);
