// @ts-check

// TODO: doctests?

/**
 * @typedef { import('./src/rnode').Observer } Observer
 * @typedef { import('./src/rnode').Validator } Validator
 * @typedef { import('./src/proxy').Account } Account
 * @typedef { import('./src/rev-address').RevAccount } RevAccount
 * @typedef { import('./src/rnode-openapi-schema').ExploratoryDeployResponse } ExploratoryDeployResponse
 */

import * as rhopmAll from './src/rhopm';

export { RNode } from './src/rnode';
export { RhoExpr } from './src/rho-expr';
export { Base16, Base58 } from './src/codec';
export { sign as signDeploy, signMetaMask } from './src/deploySig';
export {
  getAddrFromEth,
  getAddrFromPublicKey,
  getAddrFromPrivateKey,
  verifyRevAddr,
  createRevAccount,
} from './src/rev-address';
export { makeAccount, makeConnection } from './src/proxy';
export { getEthProvider, MetaMaskAccount } from './src/ethProvider';
export const rhopm = rhopmAll;
