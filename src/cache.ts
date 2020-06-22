import { PluginConfig } from './config';
import { NodeType } from './constants';

export function getCacheKey(config: PluginConfig, type: NodeType) {
  return `${config.myshopifyDomain}${type}`;
}
