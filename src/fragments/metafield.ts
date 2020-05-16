import { ApiVersion } from '../types';

export function metafieldFragment(version: ApiVersion) {
  return /* GraphQL */ `
    fragment MetafieldNode on Metafield {
      description
      id
      key
      namespace
      value
      valueType
      createdAt
      updatedAt
    }
  `;
}
