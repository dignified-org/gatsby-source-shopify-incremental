import { Client } from '../client';
import { QueryResult } from '../types';
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
  const { data } = (await client.storefront({
    data: {
      query: SHOP_POLICIES_QUERY,
    },
  })) as QueryResult<LoadShopQuery>;

  return data.data.shop;
}
