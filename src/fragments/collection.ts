import { ApiVersion } from '../types';

export function collectionFragment(version: ApiVersion) {
  return /* GraphQL */ `
    fragment CollectionNode on Collection {
      description
      descriptionHtml
      handle
      id
      image {
        altText
        id
        src
        originalSrc
      }
      products(first: 250) {
        edges {
          node {
            id
          }
        }
      }
      title
      updatedAt
    }
  `;
}
