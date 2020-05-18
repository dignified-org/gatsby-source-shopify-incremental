import { batchAllNodesFactory } from './util';

describe('batchAllNodesFactory', () => {
  it('supports empty response', async () => {
    const fetcher = jest.fn().mockImplementation(() => {
      return {
        edges: [],
        pageInfo: {
          hasNextPage: false,
        },
      };
    });

    const batchNodes = batchAllNodesFactory(
      fetcher,
      () => true,
      () => undefined,
    );

    let batches = [];

    for await (let batch of batchNodes({} as any, undefined)) {
      batches.push(batch);
    }

    expect(batches).toEqual([]);
  });

  it('supports response size under batch size', async () => {
    const fetcher = jest.fn().mockImplementation(() => {
      return {
        edges: Array.from(Array(10).keys(), (i) => ({ node: i, cursor: i })),
        pageInfo: {
          hasNextPage: false,
        },
      };
    });

    const batchNodes = batchAllNodesFactory(
      fetcher,
      () => true,
      () => undefined,
    );

    let batches = [];

    for await (let batch of batchNodes({} as any, undefined)) {
      batches.push(batch);
    }

    expect(batches).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]);
  });

  it('requests more pages as needed', async () => {
    const fetcher = jest.fn().mockImplementation((client, { after }) => {
      const a = after ?? 0;

      return {
        edges: Array.from(Array(after ? 34 : 50).keys(), (i) => ({
          node: i + a,
          cursor: i + a,
        })),
        pageInfo: {
          hasNextPage: !after,
        },
      };
    });

    const batchNodes = batchAllNodesFactory(
      fetcher,
      () => true,
      () => undefined,
    );

    let batches = [];

    for await (let batch of batchNodes({} as any, undefined)) {
      batches.push(batch);
    }

    expect(batches).toMatchSnapshot();
  });

  it('exits early based on continue', async () => {
    const fetcher = jest.fn().mockImplementation((client, { after }) => {
      const a = after ?? 0;

      return {
        edges: Array.from(Array(after ? 34 : 50).keys(), (i) => ({
          node: i + a,
          cursor: i + a,
        })),
        pageInfo: {
          hasNextPage: !after,
        },
      };
    });

    const batchNodes = batchAllNodesFactory(
      fetcher,
      (n: number) => n < 73,
      () => undefined,
    );

    let batches = [];

    for await (let batch of batchNodes({} as any, undefined)) {
      batches.push(batch);
    }

    expect(batches).toMatchSnapshot();
  });
});
