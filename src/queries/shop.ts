import { Client } from '../client';
import { LoadShopQuery } from './types';

export const SHOP_POLICIES_QUERY = /* GraphQL */ `
  query LoadShop {
    shop {
      privacyPolicy {
        body
        id
        title
        url
      }
      refundPolicy {
        body
        id
        title
        url
      }
      termsOfService {
        body
        id
        title
        url
      }
    }
  }
`;

export async function fetchStorefrontShop(client: Client) {
  const data = await client.storefront<LoadShopQuery, undefined>(
    'shop',
    SHOP_POLICIES_QUERY,
  );

  return data.shop;
}
