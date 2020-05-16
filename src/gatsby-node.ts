import { parseConfig } from "./config";
import { GatsbyContext } from "./types/gatsby";
import { createClient } from "./client";
import { loadAllStorefrontProducts, loadAllStorefrontCollections } from "./queries";
import { createProductNode } from "./nodes";
import { createCollectionNode } from "./nodes/collection";
import { TYPE_PREFIX, PRODUCT_VARIANT, PRODUCT, COLLECTION } from "./constants";

// TODO do this based on the chosen api version
exports.createSchemaCustomization = (context: GatsbyContext, pluginConfig: unknown) => {
  const { actions: { createTypes } } = context;

  const config = parseConfig(pluginConfig);

  // TODO annotate based on API version

  const typeDefs = `
    type ${TYPE_PREFIX}${PRODUCT_VARIANT} implements Node {
      price: String! @deprecated(reason: "Use priceV2 instead")
      compareAtPrice: String @deprecated(reason: "Use compareAtPriceV2 instead")
    }

    type ${TYPE_PREFIX}${PRODUCT} implements Node {
      updatedAt: Date! @dateformat
    }

    type ${TYPE_PREFIX}${COLLECTION}Image implements Node {
      src: String @deprecated(reason: "Previously an image had a single src field. This could either return the original image location or a URL that contained transformations such as sizing or scale.")
    }
  `;
  createTypes(typeDefs);
}

export async function sourceNodes(context: GatsbyContext, pluginConfig: unknown) {
  const { actions: { createNode } } = context;

  const config = parseConfig(pluginConfig);
  const client = createClient(config);

  const test = await client.admin.get(`/events.json?limit=250&filter=Collection,Page,Product&since_id=46396055289965`);

  console.log(test.data.events);

  // For now assume no cache

  // TODO handle no published products
  for await (let product of loadAllStorefrontProducts(client)) {
    await createProductNode(product, createNode);
  }

  for await (let collection of loadAllStorefrontCollections(client)) {
    await createCollectionNode(collection, createNode);
  }
}