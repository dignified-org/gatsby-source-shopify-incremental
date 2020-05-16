import { Client } from '../client';

export interface NodesFetcherVariables {
  first: number;
  after?: string | null;
}

export interface NodesFetcherResponse<T> {
  edges: {
    node: T;
    cursor: string;
  }[];
  pageInfo: {
    hasNextPage: boolean;
  };
}

export interface NodesFetcher<T> {
  (client: Client, variables: NodesFetcherVariables): Promise<
    NodesFetcherResponse<T>
  >;
}

export function fetchAllNodesFactory<T>(fetcher: NodesFetcher<T>) {
  return async function* fetchAllNodes(client: Client) {
    let {
      edges,
      pageInfo: { hasNextPage },
    } = await fetcher(client, {
      first: 250,
    });

    while (edges.length) {
      const edge = edges.pop();

      if (!edge) {
        throw new Error('Assert');
      }

      yield edge.node;

      if (!edges.length && hasNextPage) {
        ({
          edges,
          pageInfo: { hasNextPage },
        } = await fetcher(client, {
          first: 250,
          after: edge.cursor,
        }));
      }
    }
  };
}
