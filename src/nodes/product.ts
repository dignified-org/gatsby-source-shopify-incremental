import createNodeHelpers from '../create-node-helpers';

import { TYPE_PREFIX, NodeType } from '../constants';
import {
  ProductNodeFragment,
  ProductVariantNodeFragment,
  MetafieldNodeFragment,
} from '../queries/types';
import { GatsbyNodeCreator } from '../types/gatsby';
import { NodeActions } from '.';
import { CreationEvent } from '../admin';

// TODO look into baking relationships into node helpers in
// some way. Should be able to have crud functions generated
// Maybe automate the touchnode as well?

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

export async function deleteProductNode(
  storefrontId: string,
  actions: NodeActions,
) {
  const { getNode, deleteNode } = actions;

  const productNode = getNode(generateNodeId(NodeType.PRODUCT, storefrontId));

  // TODO clean this section up. Do it in node factories?
  if (productNode) {
    if (Array.isArray(productNode.metafields___NODE)) {
      productNode.metafields___NODE.forEach((id: string) => {
        const node = getNode(id);
        if (node) {
          deleteNode({
            node,
          });
        }
      });
    }

    if (Array.isArray(productNode.variants___NODE)) {
      productNode.variants___NODE.forEach((id: string) => {
        const variantNode = getNode(id);

        if (variantNode) {
          if (Array.isArray(variantNode.metafields___NODE)) {
            variantNode.metafields___NODE.forEach((id: string) => {
              const node = getNode(id);
              if (node) {
                deleteNode({
                  node,
                });
              }
            });
          }

          deleteNode({
            node: variantNode,
          });
        }
      });
    }

    deleteNode({
      node: productNode,
    });
  }
}

export async function upsertProductNode(
  event: CreationEvent<ProductNodeFragment>,
  actions: NodeActions,
) {
  const { createNode } = actions;
  await deleteProductNode(event.storefrontId, actions);
  await createProductNode(event.node, createNode);
}
