import { formatDistanceToNowStrict } from 'date-fns';
import { parseConfig } from './config';
import { GatsbyContext, GatsbyNode } from './types/gatsby';
import { createClient } from './client';
import {
  loadAllStorefrontProducts,
  loadAllStorefrontCollections,
  fetchStorefrontShop,
} from './queries';
import {
  createProductNode,
  upsertProductNode,
  deleteProductNode,
  NodeActions,
  ShopPolicyNode,
} from './nodes';
import { createCollectionNode, deleteCollectionNode } from './nodes/collection';
import { TYPE_PREFIX, NodeType } from './constants';
import { productEventsSince } from './admin/product-events';
import { EventType, collectionEventsSince } from './admin';
import { getCacheKey } from './cache';
import { ShopPolicy } from './queries/types';

// TODO do this based on the chosen api version
exports.createSchemaCustomization = (
  context: GatsbyContext,
  pluginConfig: unknown,
) => {
  const {
    actions: { createTypes },
  } = context;

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
};

// TODO cache to detect failed runs and automatically cache bust

export async function sourceNodes(
  context: GatsbyContext,
  pluginConfig: unknown,
) {
  const {
    actions: { createNode, touchNode, deleteNode },
    cache,
    reporter,
    getNodesByType,
    getNode,
  } = context;

  const config = parseConfig(pluginConfig);
  const client = createClient(config);

  const nodeActions: NodeActions = { getNode, createNode, deleteNode };

  // Shop
  const shop = await fetchStorefrontShop(client);
  await Promise.all(
    Object.entries(shop)
      .filter(([, policy]) => !!policy)
      .map(([type, policy]) =>
        ShopPolicyNode({ ...policy, type } as any).then(createNode),
      ),
  );

  // Products
  const productCacheKey = getCacheKey(config, NodeType.PRODUCT);
  const lastProductImport = await (cache as any).get(productCacheKey);
  const productStartTime = Date.now();
  if (!lastProductImport) {
    reporter.info(
      '[Shopify] No products cache found, starting full product import',
    );

    // TODO handle no published products
    let count = 0;
    for await (let product of loadAllStorefrontProducts(client)) {
      await createProductNode(product, nodeActions);
      count++;
    }
    reporter.info(`[Shopify] Finished importing ${count} products`);
  } else {
    // Shopify takes it's time updating the events api
    // a 5m delta seems to catch all the needed updates
    const since = new Date(lastProductImport - 5 * 60 * 1000);

    reporter.info(
      `[Shopify] Importing product changes from last ${formatDistanceToNowStrict(
        since,
      )} (since ${since.toISOString().substring(0, 19)})`,
    );

    // Ensure nodes are not garbage collected
    getNodesByType(
      `${TYPE_PREFIX}${NodeType.PRODUCT}`,
    ).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));
    getNodesByType(
      `${TYPE_PREFIX}${NodeType.PRODUCT_METAFIELD}`,
    ).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));
    getNodesByType(
      `${TYPE_PREFIX}${NodeType.PRODUCT_VARIANT}`,
    ).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));
    getNodesByType(
      `${TYPE_PREFIX}${NodeType.PRODUCT_VARIANT_METAFIELD}`,
    ).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));

    let deletions = 0;
    let updates = 0;
    for await (let productEvent of productEventsSince(client, since)) {
      if (productEvent.type === EventType.Create) {
        upsertProductNode(productEvent, nodeActions);
        updates++;
      } else {
        deleteProductNode(productEvent.storefrontId, nodeActions);
        deletions++;
      }
    }
    reporter.info(
      `[Shopify] Finished importing product changes: ${updates} updated and ${deletions} removed`,
    );
  }
  await (cache as any).set(productCacheKey, productStartTime);

  // Collections
  if (config.includeCollections) {
    const collectionCacheKey = getCacheKey(config, NodeType.COLLECTION);
    const lastCollectionImport = await (cache as any).get(collectionCacheKey);
    const collectionStartTime = Date.now();

    if (!lastCollectionImport) {
      reporter.info(
        '[Shopify] No collections cache found, starting full collection import',
      );

      // TODO handle no published collections
      let count = 0;
      for await (let collection of loadAllStorefrontCollections(client)) {
        await createCollectionNode(collection, nodeActions);
        count++;
      }
      reporter.info(`[Shopify] Finished importing ${count} collections`);
    } else {
      // Shopify takes it's time updating the events api
      // a 5m delta seems to catch all the needed updates
      const since = new Date(lastCollectionImport - 5 * 60 * 1000);

      reporter.info(
        `[Shopify] Importing collection changes from last ${formatDistanceToNowStrict(
          since,
        )} (since ${since.toISOString().substring(0, 19)})`,
      );

      // Ensure nodes are not garbage collected
      getNodesByType(
        `${TYPE_PREFIX}${NodeType.COLLECTION}`,
      ).forEach((node: GatsbyNode) => touchNode({ nodeId: node.id }));

      let deletions = 0;
      let updates = 0;
      for await (let collectionEvent of collectionEventsSince(client, since)) {
        if (collectionEvent.type === EventType.Create) {
          createCollectionNode(collectionEvent.node, nodeActions);
          updates++;
        } else {
          deleteCollectionNode(collectionEvent.storefrontId, nodeActions);
          deletions++;
        }
      }
      reporter.info(
        `[Shopify] Finished importing collection changes: ${updates} updated and ${deletions} removed`,
      );
    }
    await (cache as any).set(collectionCacheKey, collectionStartTime);
  }

  // Following types are not yet incremental

  // if (config.includePages) {
  //   reporter.info('[Shopify] Starting full page import');
  //   let count = 0;
  //   for await (let collection of loadAllStorefrontCollections(client)) {
  //     await createCollectionNode(collection, nodeActions);
  //     count++;
  //   }
  //   reporter.info(`[Shopify] Finished importing ${count} pages`);
  // }
}
