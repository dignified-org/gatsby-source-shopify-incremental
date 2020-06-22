import { GatsbyNodeCreator, GatsbyNodeDeletor, GatsbyNode } from '../types';
import { NodeType, TYPE_PREFIX } from '../constants';
import createNodeHelpers from '../create-node-helpers';
import {
  PageNodeFragment,
  BlogNodeFragment,
  ArticleNodeFragment,
} from '../queries/types';

export interface NodeActions {
  getNode: (id: string) => GatsbyNode | undefined;
  createNode: GatsbyNodeCreator;
  deleteNode: GatsbyNodeDeletor;
}

export * from './product';
export * from './collection';

// These nodes are ported right from
// gatsby-source-shopify right now

// I plan to make them incremental
// soon but have decided they are
// less important for now

const { createNodeFactory, generateNodeId } = createNodeHelpers({
  typePrefix: TYPE_PREFIX,
});

export const ShopPolicyNode = createNodeFactory(NodeType.SHOP_POLICY);

export const ArticleNode = createNodeFactory(
  NodeType.ARTICLE,
  async (node: any) => {
    if (node.blog) {
      node.blog___NODE = generateNodeId(NodeType.BLOG, node.blog.id);
      delete node.blog;
    }

    return node;
  },
);

export async function createArticleNode(
  page: ArticleNodeFragment,
  actions: NodeActions,
) {
  const { createNode } = actions;

  await ArticleNode(page).then(createNode);
}

export const BlogNode = createNodeFactory(NodeType.BLOG);

export async function createBlogNode(
  page: BlogNodeFragment,
  actions: NodeActions,
) {
  const { createNode } = actions;

  await BlogNode(page).then(createNode);
}

export const PageNode = createNodeFactory(NodeType.PAGE);

export async function createPageNode(
  page: PageNodeFragment,
  actions: NodeActions,
) {
  const { createNode } = actions;

  await PageNode(page).then(createNode);
}
