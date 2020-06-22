import { Client } from '../client';
import { adminCollectionDeletes } from './collection-deletes';
import { adminCollectionUpdates } from './collection-updates';
import { Event, EventType } from '.';
import { CollectionNodeFragment } from '../queries/types';
import { NodeType } from '../constants';
import { fetchStorefrontCollectionsByIds } from '../queries';

type R = AsyncGenerator<Event<CollectionNodeFragment>>;

// TODO factor out event handling code and remove
// duplication with collection events

export async function* collectionEventsSince(client: Client, since: Date): R {
  for await (let deletedCollectionNodes of adminCollectionDeletes(
    client,
    since,
  )) {
    for (let node of deletedCollectionNodes) {
      yield {
        type: EventType.Delete,
        resource: NodeType.COLLECTION,
        storefrontId: Buffer.from(node.subjectId).toString('base64'),
      };
    }
  }

  let published = [];
  for await (let updatedCollectionNodes of adminCollectionUpdates(
    client,
    since,
  )) {
    for (let node of updatedCollectionNodes) {
      if (node.published) {
        published.push(node.storefrontId);
      } else {
        yield {
          type: EventType.Delete,
          resource: NodeType.COLLECTION,
          storefrontId: node.storefrontId,
        };
      }
    }

    // TODO avoid this duplication without
    // published array getting large

    // Emit updates here to avoid published
    // array getting very large
    while (published.length) {
      const batch = published.splice(0, 50);
      const collections = await fetchStorefrontCollectionsByIds(client, batch);

      for (let collection of collections) {
        if (!collection) {
          // Assume unpublished
          yield {
            type: EventType.Delete,
            resource: NodeType.COLLECTION,
            storefrontId: batch[collections.indexOf(collection)],
          };
        } else {
          yield {
            type: EventType.Create,
            resource: NodeType.COLLECTION,
            storefrontId: collection.id,
            node: collection,
          };
        }
      }
    }
  }

  while (published.length) {
    const batch = published.splice(0, 50);
    const collections = await fetchStorefrontCollectionsByIds(client, batch);

    for (let collection of collections) {
      if (!collection) {
        // Assume unpublished
        yield {
          type: EventType.Delete,
          resource: NodeType.COLLECTION,
          storefrontId: batch[collections.indexOf(collection)],
        };
      } else {
        yield {
          type: EventType.Create,
          resource: NodeType.COLLECTION,
          storefrontId: collection.id,
          node: collection,
        };
      }
    }
  }
}
