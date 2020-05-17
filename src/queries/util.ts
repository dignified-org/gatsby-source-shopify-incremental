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

export interface NodesFetcher<
  T,
  V extends NodesFetcherVariables = NodesFetcherVariables
> {
  (client: Client, variables: V): Promise<NodesFetcherResponse<T>>;
}

export function fetchAllNodesFactory<T>(fetcher: NodesFetcher<T>) {
  return async function* fetchAllNodes(
    client: Client,
    variables?: Omit<NodesFetcherVariables, 'first' | 'after'>,
  ) {
    let {
      edges,
      pageInfo: { hasNextPage },
    } = await fetcher(client, {
      ...variables,
      first: 250,
    });

    while (edges.length) {
      const edge = edges.shift();

      if (!edge) {
        throw new Error('Assert');
      }

      yield edge.node;

      if (!edges.length && hasNextPage) {
        ({
          edges,
          pageInfo: { hasNextPage },
        } = await fetcher(client, {
          ...variables,
          first: 250,
          after: edge.cursor,
        }));
      }
    }
  };
}
