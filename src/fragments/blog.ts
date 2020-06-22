import { ApiVersion } from '../types';

export function blogFragment(version: ApiVersion) {
  return /* GraphQL */ `
    fragment BlogNode on Blog {
      id
      title
      handle
      url
      # TODO add ArticleAuthors nodes
    }
  `;
}
