import { parseConfig } from './config';

const BASE_CONFIG = {
  myshopifyDomain: 'example.myshopify.com',
  adminAccessToken: 'xxxx',
  storefrontAccessToken: 'yyyy',
};

describe('config.ts', () => {
  it('passes basic config', () => {
    expect(parseConfig(BASE_CONFIG)).toMatchSnapshot('base with defaults populated');
  });

  it('correctly parses metafield config', () => {
    const mtf = [{ key: 'key', namespace: 'namespace', name: 'example' }];
    const cases = [[undefined, false], [false, false], [true, 100], [50, 50], [mtf, mtf]];

    for (let [input, output] of cases) {
      const config = parseConfig({
        ...BASE_CONFIG,
        productMetafields: input,
      });

      expect(config.productMetafields).toEqual(output)
    }
  });
});