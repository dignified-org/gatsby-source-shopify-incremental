import { ApiVersion } from '../types';

export function pageFragment(version: ApiVersion) {
  return /* GraphQL */ `
    fragment PageNode on Page {
      id
      handle
      title
      body
      bodySummary
      updatedAt
      createdAt
      url
    }
  `;
}
