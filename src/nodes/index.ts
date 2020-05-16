import createNodeHelpers from '../create-node-helpers';

import {
  TYPE_PREFIX,
  PRODUCT,
  PRODUCT_OPTION,
  PRODUCT_VARIANT,
  PRODUCT_METAFIELD,
  PRODUCT_VARIANT_METAFIELD,
} from '../constants';
import { ProductNodeFragment, ProductVariantNodeFragment } from '../queries/types';
import { GatsbyNode } from '../types/gatsby';

const { createNodeFactory, generateNodeId } = createNodeHelpers({
  typePrefix: TYPE_PREFIX,
});

export interface ProductNode extends ProductNodeFragment {
  variants___NODE?: string[];
  metafields___NODE?: string[];
  options___NODE?: string[];
}

export const ProductNode = createNodeFactory(
  PRODUCT,
  async (node: ProductNode) => {
    if (node.variants) {
      const variants = node.variants.edges.map((edge) => edge.node);

      node.variants___NODE = variants.map((variant) =>
        generateNodeId(PRODUCT_VARIANT, variant.id),
      );

      delete node.variants;
    }

    if (node.metafields) {
      const metafields = node.metafields.edges.map((edge) => edge.node);

      node.metafields___NODE = metafields.map((metafield) =>
        generateNodeId(PRODUCT_METAFIELD, metafield.id),
      );
      delete node.metafields;
    }

    if (node.options) {
      node.options___NODE = node.options.map((option) =>
        generateNodeId(PRODUCT_OPTION, option.id),
      );
      delete node.options;
    }

    return node;
  },
);

export const ProductMetafieldNode = createNodeFactory(PRODUCT_METAFIELD);

export const ProductOptionNode = createNodeFactory(PRODUCT_OPTION);

export interface ProductVariantNode extends ProductVariantNodeFragment {
  metafields___NODE?: string[];
}

export const ProductVariantNode = createNodeFactory(
  PRODUCT_VARIANT,
  async (node: ProductVariantNode) => {
    if (node.metafields) {
      const metafields = node.metafields.edges.map((edge) => edge.node);

      node.metafields___NODE = metafields.map((metafield) =>
        generateNodeId(PRODUCT_VARIANT_METAFIELD, metafield.id),
      );
      delete node.metafields;
    }

    return node;
  },
);

export const ProductVariantMetafieldNode = createNodeFactory(PRODUCT_VARIANT_METAFIELD);
