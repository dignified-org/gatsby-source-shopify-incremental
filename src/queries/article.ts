import { Client } from '../client';
import { QueryResult, ApiVersion } from '../types';
import { LoadArticlesQuery, LoadArticlesQueryVariables } from './types';
import { fetchAllNodesFactory } from './util';
import { articleFragment } from '../fragments';

export function articlesQuery(version: ApiVersion) {
  return /* GraphQL */ `
    ${articleFragment(version)}
    query LoadArticles($first: Int!, $after: String) {
      articles(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...ArticleNode
          }
        }
      }
    }
  `;
}

async function fetchStorefrontArticles(
  client: Client,
  variables: LoadArticlesQueryVariables,
) {
  const data = await client.storefront<
    LoadArticlesQuery,
    LoadArticlesQueryVariables
  >(articlesQuery(client.version), variables);

  return data.articles;
}

export const loadAllStorefrontArticles = fetchAllNodesFactory(
  fetchStorefrontArticles,
);
