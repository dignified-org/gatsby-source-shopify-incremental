import createNodeHelpers from '../create-node-helpers';

import { TYPE_PREFIX, NodeType } from '../constants';
import {
  ProductNodeFragment,
  ProductVariantNodeFragment,
  MetafieldNodeFragment,
} from '../queries/types';
import { GatsbyNodeCreator } from '../types/gatsby';

const { createNodeFactory, generateNodeId } = createNodeHelpers({
  typePrefix: TYPE_PREFIX,
});

export interface ProductNode extends ProductNodeFragment {
  variants___NODE?: string[];
  metafields___NODE?: string[];
}

const ProductNode = createNodeFactory(
  NodeType.PRODUCT,
  async (node: ProductNode) => {
    // TODO handle relationship based deletions here

    if (node.variants) {
      const variants = node.variants.edges.map((edge) => edge.node);

      node.variants___NODE = variants.map((variant) =>
        generateNodeId(NodeType.PRODUCT_VARIANT, variant.id),
      );

      delete node.variants;
    }

    if (node.metafields) {
      const metafields = node.metafields.edges.map((edge) => edge.node);

      node.metafields___NODE = metafields.map((metafield) =>
        generateNodeId(NodeType.PRODUCT_METAFIELD, metafield.id),
      );
      delete node.metafields;
    }

    return node;
  },
);

interface ProductMetafieldNode extends MetafieldNodeFragment {
  product___NODE?: string;
}

const ProductMetafieldNode = createNodeFactory(
  NodeType.PRODUCT_METAFIELD,
  async (node: ProductMetafieldNode, productId: string) => {
    node.product___NODE = generateNodeId(NodeType.PRODUCT_VARIANT, productId);

    return node;
  },
);

interface ProductVariantNode extends ProductVariantNodeFragment {
  metafields___NODE?: string[];
  product___NODE?: string;
}

const ProductVariantNode = createNodeFactory(
  NodeType.PRODUCT_VARIANT,
  async (node: ProductVariantNode, productId: string) => {
    if (node.metafields) {
      const metafields = node.metafields.edges.map((edge) => edge.node);

      node.metafields___NODE = metafields.map((metafield) =>
        generateNodeId(NodeType.PRODUCT_VARIANT_METAFIELD, metafield.id),
      );
      delete node.metafields;
    }

    node.product___NODE = generateNodeId(NodeType.PRODUCT, productId);

    return node;
  },
);

interface ProductVariantMetafieldNode extends MetafieldNodeFragment {
  variant___NODE?: string;
}

const ProductVariantMetafieldNode = createNodeFactory(
  NodeType.PRODUCT_VARIANT_METAFIELD,
  async (node: ProductVariantMetafieldNode, variantId: string) => {
    node.variant___NODE = generateNodeId(NodeType.PRODUCT_VARIANT, variantId);

    return node;
  },
);

export async function createProductNode(
  product: ProductNodeFragment,
  createNode: GatsbyNodeCreator,
) {
  // Create all metafield nodes
  await Promise.all(
    product.metafields.edges
      .map((edge) => ProductMetafieldNode(edge.node))
      .map((p) => p.then(createNode)),
  );

  await Promise.all(
    product.variants.edges.map(async (edge) => {
      await Promise.all(
        edge.node.metafields.edges
          .map((edge) => ProductVariantMetafieldNode(edge.node, edge.node.id))
          .map((p) => p.then(createNode)),
      );
      return ProductVariantNode(edge.node, product.id).then(createNode);
    }),
  );

  await ProductNode(product).then(createNode);
}
