import { GatsbyNodeCreator, GatsbyNodeDeletor, GatsbyNode } from '../types';

export interface NodeActions {
  getNode: (id: string) => GatsbyNode | undefined;
  createNode: GatsbyNodeCreator;
  deleteNode: GatsbyNodeDeletor;
}

export * from './product';
