import { NodeType } from '../constants';

export enum EventType {
  Create = 'create',
  Delete = 'delete',
}

export interface CreationEvent<N = any> {
  type: EventType.Create;
  resource: NodeType;
  storefrontId: string;
  node: N;
}

export interface DeletionEvent {
  type: EventType.Delete;
  resource: NodeType;
  storefrontId: string;
}

export type Event<N = any> = CreationEvent<N> | DeletionEvent;

export * from './product-events';
export * from './collection-events';
