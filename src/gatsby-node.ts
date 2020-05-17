import { formatDistanceToNowStrict } from 'date-fns';
import { parseConfig } from "./config";
import { GatsbyContext, GatsbyNode } from "./types/gatsby";
import { createClient } from "./client";
import { loadAllStorefrontProducts, loadAllStorefrontCollections } from "./queries";
import { createProductNode } from "./nodes";
import { createCollectionNode } from "./nodes/collection";
import { TYPE_PREFIX, NodeType } from "./constants";
import { productEventsSince } from "./admin/product-events";
import { EventType } from "./admin";

// TODO do this based on the chosen api version
exports.createSchemaCustomization = (context: GatsbyContext, pluginConfig: unknown) => {
  const { actions: { createTypes } } = context;

  // TODO annotate based on API version
  const config = parseConfig(pluginConfig);

  const typeDefs = `
    type ${TYPE_PREFIX}${NodeType.PRODUCT_VARIANT} implements Node {
      price: String! @deprecated(reason: "Use priceV2 instead")
      compareAtPrice: String @deprecated(reason: "Use compareAtPriceV2 instead")
    }

    type ${TYPE_PREFIX}${NodeType.PRODUCT} implements Node {
      updatedAt: Date! @dateformat
    }

    type ${TYPE_PREFIX}${NodeType.COLLECTION}Image implements Node {
      src: String @deprecated(reason: "Previously an image had a single src field. This could either return the original image location or a URL that contained transformations such as sizing or scale.")
    }
  `;

  createTypes(typeDefs);
}

export async function sourceNodes(context: GatsbyContext, pluginConfig: unknown) {
  const { actions: { createNode, touchNode, deleteNode }, cache, reporter, getNodesByType, getNode } = context;

  const config = parseConfig(pluginConfig);
  const client = createClient(config);

  // Products
  const lastProductImport = await (cache as any).get(`${config.myshopifyDomain}${NodeType.PRODUCT}`);
  const productStartTime = Date.now();
  if (!lastProductImport) {
    reporter.info('[Shopify] No products cache found, starting full product import');

    // TODO handle no published products
    let count = 0;
    for await (let product of loadAllStorefrontProducts(client)) {
      await createProductNode(product, createNode);
      count++;
    }
    reporter.info(`[Shopify] Finished importing ${count} products`);
  } else {
    // Shopify takes it's time updating the events api
    // a 5m delta seems to catch all the needed updates
    const since = new Date(lastProductImport - (5 * 60 * 1000)); 

    reporter.info(`[Shopify] Importing product changes from last ${formatDistanceToNowStrict(since)} (since ${since.toDateString().substring(0, 19)})`);

    // Ensure nodes are not garbage collected
    getNodesByType(`${TYPE_PREFIX}${NodeType.PRODUCT}`).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));
    getNodesByType(`${TYPE_PREFIX}${NodeType.PRODUCT_METAFIELD}`).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));
    getNodesByType(`${TYPE_PREFIX}${NodeType.PRODUCT_VARIANT}`).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));
    getNodesByType(`${TYPE_PREFIX}${NodeType.PRODUCT_VARIANT_METAFIELD}`).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));


    let deletions = 0;
    let updates = 0;
    for await (let productEvent of productEventsSince(client, since)) {
      if (productEvent.type === EventType.Create) {
        // TODO expose function from nodes
        const productNode = getNode(`${TYPE_PREFIX}__${NodeType.PRODUCT}__${productEvent.storefrontId}`);

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
        await createProductNode(productEvent.node, createNode);
        updates++;
      } else {
        // TODO expose function from nodes
        const node = getNode(`${TYPE_PREFIX}__${NodeType.PRODUCT}__${productEvent.storefrontId}`);
        if (node) {
          deleteNode({
            node,
          });
          deletions++;
        }
      }
    }
    reporter.info(`[Shopify] Finished importing product changes: ${updates} updated and ${deletions} removed`);
  }
  await (cache as any).set(`${config.myshopifyDomain}${NodeType.PRODUCT}`, productStartTime);

  // Collections
  for await (let collection of loadAllStorefrontCollections(client)) {
    await createCollectionNode(collection, createNode);
  }
}