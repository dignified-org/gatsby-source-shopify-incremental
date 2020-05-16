import { ApiVersion } from '../types';
import { metafieldFragment } from './metafield';

function productVariantFragment(version: ApiVersion) {
  return /* GraphQL */ `
    ${metafieldFragment(version)}
    fragment ProductVariantNode on ProductVariant {
      availableForSale
      compareAtPrice
      compareAtPriceV2 {
        amount
        currencyCode
      }
      id
      image {
        altText
        id
        originalSrc
      }
      metafields(first: 250) {
        edges {
          node {
            ...MetafieldNode
          }
        }
      }
      price
      priceV2 {
        amount
        currencyCode
      }
      requiresShipping
      selectedOptions {
        name
        value
      }
      sku
      title
      weight
      weightUnit
      presentmentPrices(first: 250) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;
}

export function productFragment(version: ApiVersion) {
  return /* GraphQL */ `
    ${productVariantFragment(version)}
    fragment ProductNode on Product {
      availableForSale
      createdAt
      description
      descriptionHtml
      handle
      id
      images(first: 250) {
        edges {
          node {
            id
            altText
            originalSrc
          }
        }
      }
      metafields(first: 250) {
        edges {
          node {
            # Included in variant fragment
            ...MetafieldNode
          }
        }
      }
      onlineStoreUrl
      options {
        id
        name
        values
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      productType
      publishedAt
      tags
      title
      updatedAt
      variants(first: 250) {
        edges {
          node {
            ...ProductVariantNode
          }
        }
      }
      vendor
    }
  `;
}
