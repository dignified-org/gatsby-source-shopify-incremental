import { parseConfig } from "./config";
import { GatsbyContext } from "./types/gatsby";
import { createClient } from "./client";
import { loadStorefrontProducts } from "./queries";
import { ProductOptionNode, ProductMetafieldNode, ProductVariantNode, ProductVariantMetafieldNode } from "./nodes";


export async function sourceNodes(context: GatsbyContext, pluginConfig: unknown) {
  const { actions: { createNode } } = context;

  const config = parseConfig(pluginConfig);
  const client = createClient(config);

  // For now assume no cache

  for await (let product of loadStorefrontProducts(client)) {
    // Create product option nodes
    (await Promise.all(product.options.map(ProductOptionNode))).map(createNode);

    // Create all metafield nodes
    (await Promise.all(product.metafields.edges.map(edge => ProductMetafieldNode(edge.node)))).map(createNode);


    (await Promise.all(product.variants.edges.map(async edge => {
      (await Promise.all(edge.node.metafields.edges.map(edge => ProductVariantMetafieldNode(edge.node)))).map(createNode);
      return ProductVariantNode(edge.node);
    }))).map(createNode);
  }
}