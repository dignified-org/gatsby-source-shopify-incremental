import { Client } from "../client";

// TODO clean up naming

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
  V,
> {
  (client: Client, variables: NodesFetcherVariables & V): Promise<NodesFetcherResponse<T>>;
}

export interface Con<T, C = any> {
  (node: T, context: C): boolean;
}

export interface Var<V, C> {
  (context: C): V;
}

export function batchAllNodesFactory<T, V, C = any>(fetcher: NodesFetcher<T, V>, con: Con<T, C>, vars: Var<V, C>, size: number = 50) {
  return async function* batchAllNodes(client: Client, context: C) {
    const variables = vars(context);

    let {
      edges,
      pageInfo: { hasNextPage },
    } = await fetcher(client, {
      ...variables,
      first: 250,
    });

    while (1) {
      if (!edges.length) {
        break;
      }

      const batch: T[] = [];
      let batchCursor = undefined;

      while (1) {
        if (batch.length === size || !edges.length) {
          break;
        }

        const edge = edges.shift();

        if (!edge) {
          throw new Error('Assert');
        }

        if (!con(edge.node, context)) {
          yield batch;
          return;
        }
        batch.push(edge.node);
        batchCursor = edge.cursor;
      }

      yield batch;

      if (edges.length < size && hasNextPage) {
        ({
          edges,
          pageInfo: { hasNextPage },
        } = await fetcher(client, {
          ...variables,
          first: 250,
          after: edges.length
            ? edges[edges.length - 1].cursor
            : batchCursor,
        }));
      }
    }
  }
}