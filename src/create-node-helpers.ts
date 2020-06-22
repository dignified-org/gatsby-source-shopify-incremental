// Typescript port of create-node-helpers
// https://github.com/angeloashmore/gatsby-node-helpers/blob/604f1504bfa8c714b488f706edfe3154c4426fba/src/index.js#L1

import { createHash } from 'crypto';
import {
  assoc,
  camelCase,
  cloneDeep,
  identity,
  isPlainObject,
  lowerFirst,
  upperFirst,
} from 'lodash/fp';
import stringify from 'json-stringify-safe';
import { GatsbyNode } from './types/gatsby';

// Default parent ID for all nodes.
const DEFAULT_PARENT_ID = `__SOURCE__`;

// Node fields used internally by Gatsby.
const RESTRICTED_NODE_FIELDS = [
  `id`,
  `children`,
  `parent`,
  `fields`,
  `internal`,
];

// Generates an MD5 hash from a string.
const digest = (str: string) => createHash(`md5`).update(str).digest(`hex`);

// Generates an MD5 hash of an object and assign it to the internal.contentDigest key.
const withDigest = (obj: GatsbyNode) =>
  assoc([`internal`, `contentDigest`], digest(stringify(obj)), obj);

export interface Options {
  sourceId?: string;
  typePrefix: string;
  conflictFieldPrefix?: string;
}

export interface Middleware<T> {
  (node: T, ...args: any[]): Promise<T>;
}

// Returns node helpers for creating new nodes.
const createNodeHelpers = (options: Partial<Options> = {}) => {
  if (!isPlainObject(options))
    throw new Error(
      `Options must be an object. An argument of type ${typeof options} was provided.`,
    );

  if (
    typeof options.sourceId !== `undefined` &&
    typeof options.sourceId !== `string`
  )
    throw new Error(
      `options.sourceId must be a string. A value of type ${typeof options.sourceId} was provided.`,
    );

  if (typeof options.typePrefix !== `string`)
    throw new Error(
      `options.typePrefix must be a string. A value of type ${typeof options.typePrefix} was provided.`,
    );

  if (
    typeof options.conflictFieldPrefix !== `undefined` &&
    typeof options.conflictFieldPrefix !== `string`
  )
    throw new Error(
      `options.conflictFieldPrefix must be a string. A value of type ${typeof options.conflictFieldPrefix} was provided.`,
    );

  const {
    sourceId = DEFAULT_PARENT_ID,
    typePrefix,
    conflictFieldPrefix = lowerFirst(typePrefix),
  } = options;

  // Generates a node ID from a given type and node ID.
  const generateNodeId = (type: string, id: string) =>
    `${typePrefix}__${upperFirst(camelCase(type))}__${id}`;

  // Generates a node type name from a given type.
  const generateTypeName = (type: string) =>
    upperFirst(camelCase(`${typePrefix} ${type}`));

  // Prefixes conflicting node fields.
  const prefixConflictingKeys = <T>(obj: T) => {
    Object.keys(obj as any).forEach((key) => {
      if (RESTRICTED_NODE_FIELDS.includes(key)) {
        (obj as any)[conflictFieldPrefix + upperFirst(key)] = (obj as any)[key];
        delete (obj as any)[key];
      }
    });

    return obj;
  };

  // Creates a node factory with a given type and middleware processor.
  const createNodeFactory = <T extends { id: string }>(
    type: string,
    middleware: Middleware<T> = identity,
  ) => async (obj: T, ...args: any[]): Promise<GatsbyNode> => {
    const clonedObj = cloneDeep(obj);
    const safeObj = prefixConflictingKeys(clonedObj);

    let node = {
      ...safeObj,
      id: generateNodeId(type, obj.id),
      parent: sourceId,
      children: [],
      internal: {
        type: generateTypeName(type),
      },
    };

    let n = await middleware(node, ...args);

    return withDigest((n as unknown) as GatsbyNode);
  };

  return {
    createNodeFactory,
    generateNodeId,
    generateTypeName,
  };
};

export default createNodeHelpers;
