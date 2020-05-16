import { parseConfig } from "./config";
import { GatsbyContext } from "./types/gatsby";
import { createClient } from "./client";
import { loadAllStorefrontProducts } from "./queries";
import { ProductOptionNode, ProductMetafieldNode, ProductVariantNode, ProductVariantMetafieldNode, ProductNode } from "./nodes";

// TODO do this based on the chosen api version
exports.createSchemaCustomization = ({ actions }: GatsbyContext, pluginConfig: unknown) => {
  const { createTypes } = actions
  const typeDefs = `
    type ShopifyProductVariant implements Node {
      price: String! @deprecated(reason: "Use priceV2 instead")
      compareAtPrice: String! @deprecated(reason: "Use compareAtPriceV2 instead")
    }

    type ShopifyProduct implements Node {
      updatedAt: Date! @dateformat
    }
  `;
  createTypes(typeDefs)
}

export async function sourceNodes(context: GatsbyContext, pluginConfig: unknown) {
  const { actions: { createNode } } = context;

  const config = parseConfig(pluginConfig);
  const client = createClient(config);

  // For now assume no cache

  // TODO handle no published products
  for await (let product of loadAllStorefrontProducts(client)) {
    // Create product option nodes
    await Promise.all(product.options.map(ProductOptionNode).map(p => p.then(createNode)));

    // Create all metafield nodes
    await Promise.all(product.metafields.edges.map(edge => ProductMetafieldNode(edge.node)).map(p => p.then(createNode)));


    await Promise.all(product.variants.edges.map(async edge => {
      await Promise.all(edge.node.metafields.edges.map(edge => ProductVariantMetafieldNode(edge.node)).map(p => p.then(createNode)));
      return ProductVariantNode(edge.node, product.id).then(createNode);
    }));

    console.log(product.handle)

    await ProductNode(product).then(createNode);
  }
}