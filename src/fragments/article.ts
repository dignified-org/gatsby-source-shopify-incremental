import { ApiVersion } from '../types';

export function articleFragment(version: ApiVersion) {
  return /* GraphQL */ `
    fragment ArticleNode on Article {
      author {
        bio
        email
        firstName
        lastName
        name
      }
      authorV2 {
        bio
        email
        firstName
        lastName
        name
      }
      blog {
        id
      }
      content
      contentHtml
      excerpt
      excerptHtml
      id
      image {
        altText
        id
        src
        originalSrc
      }
      publishedAt
      tags
      title
      handle
      url
      seo {
        title
        description
      }
    }
  `;
}
