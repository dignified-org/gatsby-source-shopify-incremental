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
  (client: Client, variables: V, page: number): Promise<
    NodesFetcherResponse<T>
  >;
}

export function fetchAllNodesFactory<T>(fetcher: NodesFetcher<T>) {
  return async function* fetchAllNodes(
    client: Client,
    variables?: Omit<NodesFetcherVariables, 'first' | 'after'>,
  ) {
    let page = 1;

    let {
      edges,
      pageInfo: { hasNextPage },
    } = await fetcher(
      client,
      {
        ...variables,
        first: 100,
      },
      page,
    );

    let promise: null | Promise<NodesFetcherResponse<T>> = null;

    while (edges.length) {
      if (!promise && hasNextPage) {
        // Greedy fetching
        page++;
        promise = fetcher(
          client,
          {
            ...variables,
            first: 100,
            after: edges[edges.length - 1].cursor,
          },
          page,
        );
      }

      const edge = edges.shift();

      if (!edge) {
        throw new Error('Assert');
      }

      yield edge.node;

      if (!edges.length && promise) {
        ({
          edges,
          pageInfo: { hasNextPage },
        } = await promise);
        promise = null;
      }
    }
  };
}
