import { Client } from '../client';
import { adminProductDeletes } from './product-deletes';
import { Event, EventType } from '.';
import { ProductNodeFragment } from '../queries/types';
import { NodeType } from '../constants';
import { adminProductUpdates } from './product-updates';
import { fetchStorefrontProductsByIds } from '../queries';

type R = AsyncGenerator<Event<ProductNodeFragment>>;

export async function* productEventsSince(client: Client, since: Date): R {
  for await (let deletedProductEdges of adminProductDeletes(client, since)) {
    for (let edge of deletedProductEdges) {
      yield {
        type: EventType.Delete,
        resource: NodeType.PRODUCT,
        storefrontId: Buffer.from(edge.node.subjectId).toString('base64'),
      };
    }
  }

  let published = [];
  for await (let updatedProductEdges of adminProductUpdates(client, since)) {
    for (let edge of updatedProductEdges) {
      if (edge.node.published) {
        published.push(edge.node.storefrontId);
      } else {
        yield {
          type: EventType.Delete,
          resource: NodeType.PRODUCT,
          storefrontId: edge.node.storefrontId,
        };
      }
    }

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
