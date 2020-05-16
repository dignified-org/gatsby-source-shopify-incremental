import createNodeHelpers from '../create-node-helpers';

import { TYPE_PREFIX, PRODUCT, COLLECTION } from '../constants';
import { CollectionNodeFragment } from '../queries/types';
import { GatsbyNodeCreator } from '../types';

const { createNodeFactory, generateNodeId } = createNodeHelpers({
  typePrefix: TYPE_PREFIX,
});

interface CollectionNode extends CollectionNodeFragment {
  products___NODE?: string[];
}

const CollectionNode = createNodeFactory(
  COLLECTION,
  async (node: CollectionNode) => {
    if (node.products) {
      node.products___NODE = node.products.edges.map((edge) =>
        generateNodeId(PRODUCT, edge.node.id),
      );
      delete node.products;
    }

    return node;
  },
);

export async function createCollectionNode(
  collection: CollectionNodeFragment,
  createNode: GatsbyNodeCreator,
) {
  await CollectionNode(collection).then(createNode);
}
