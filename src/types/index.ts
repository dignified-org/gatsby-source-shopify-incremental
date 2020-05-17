export * from './gatsby';

export enum ApiVersion {
  Apr2020 = '2020-04',
  Jul2020 = '2020-07',
}

export type QueryResult<T> = { data: { data: T } };
