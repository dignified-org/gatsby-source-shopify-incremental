import { Client } from '../client';
import { adminProductDeletes } from './product-deletes';
import { Event, EventType } from '.';
import { ProductNodeFragment } from '../queries/types';
import { NodeType } from '../constants';
import { adminProductUpdates } from './product-updates';
import { fetchStorefrontProductsByIds } from '../queries';

type R = AsyncGenerator<Event<ProductNodeFragment>>;

// TODO factor out event handling code and remove
// duplication with collection events

export async function* productEventsSince(client: Client, since: Date): R {
  for await (let deletedProductNodes of adminProductDeletes(client, since)) {
    for (let node of deletedProductNodes) {
      yield {
        type: EventType.Delete,
        resource: NodeType.PRODUCT,
        storefrontId: Buffer.from(node.subjectId).toString('base64'),
      };
    }
  }

  let published = [];
  for await (let updatedProductNodes of adminProductUpdates(client, since)) {
    for (let node of updatedProductNodes) {
      if (node.published) {
        published.push(node.storefrontId);
      } else {
        yield {
          type: EventType.Delete,
          resource: NodeType.PRODUCT,
          storefrontId: node.storefrontId,
        };
      }
    }

    // TODO avoid this duplication without
    // published array getting large

    // Emit updates here to avoid published
    // array getting very large
    while (published.length > 50) {
      const batch = published.splice(0, 50);
      const products = await fetchStorefrontProductsByIds(client, batch);
      for (let product of products) {
        if (!product) {
          // Assume unpublished
          yield {
            type: EventType.Delete,
            resource: NodeType.PRODUCT,
            storefrontId: batch[products.indexOf(product)],
          };
        } else {
          yield {
            type: EventType.Create,
            resource: NodeType.PRODUCT,
            storefrontId: product.id,
            node: product,
          };
        }
      }
    }
  }

  while (published.length) {
    const batch = published.splice(0, 50);
    const products = await fetchStorefrontProductsByIds(client, batch);

    for (let product of products) {
      if (!product) {
        // Assume unpublished
        yield {
          type: EventType.Delete,
          resource: NodeType.PRODUCT,
          storefrontId: batch[products.indexOf(product)],
        };
      } else {
        yield {
          type: EventType.Create,
          resource: NodeType.PRODUCT,
          storefrontId: product.id,
          node: product,
        };
      }
    }
  }
}
