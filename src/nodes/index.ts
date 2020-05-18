import { GatsbyNodeCreator, GatsbyNodeDeletor, GatsbyNode } from '../types';
import { NodeType, TYPE_PREFIX } from '../constants';
import createNodeHelpers from '../create-node-helpers';

export interface NodeActions {
  getNode: (id: string) => GatsbyNode | undefined;
  createNode: GatsbyNodeCreator;
  deleteNode: GatsbyNodeDeletor;
}

export * from './product';

// These nodes are ported right from
// gatsby-source-shopify right now

// I plan to make them incremental
// soon but have decided they are
// less important for now

const { createNodeFactory, generateNodeId } = createNodeHelpers({
  typePrefix: TYPE_PREFIX,
});

export const ArticleNode = createNodeFactory(
  NodeType.ARTICLE,
  async (node: any) => {
    if (node.blog)
      node.blog___NODE = generateNodeId(NodeType.BLOG, node.blog.id);
    return node;
  },
);

export const BlogNode = createNodeFactory(NodeType.BLOG);

export const ShopPolicyNode = createNodeFactory(NodeType.SHOP_POLICY);

export const PageNode = createNodeFactory(NodeType.PAGE);
