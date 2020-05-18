export const PAGES_QUERY = /* GraphQL */ `
  query GetPages($first: Int!, $after: String) {
    pages(first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          handle
          title
          body
          bodySummary
          updatedAt
          url
        }
      }
    }
  }
`;
