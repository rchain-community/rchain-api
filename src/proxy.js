/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
// @ts-check
import { sign as signDeploy } from './deploySig';
import { RhoExpr } from './rho-expr';

const { freeze } = Object;

/**
 * Find deploy, fetch its block, and extract relevant DeployInfo
 *
 * @param {Observer} observer
 * @param {string} deployId
 * @returns { Promise<?DeployInfo> } null if not (yet) available
 * @throws { Error } in case of deploy execution error
 *
 * @typedef { import("./rnode-openapi-schema").DeployInfo } DeployInfo
 */
export async function checkForDeployInfo(observer, deployId) {
  // Request a block with the deploy
  const block = await observer.findDeploy(deployId).catch((ex) => {
    // Handle response code 400 / deploy not found
    if (ex.status !== 400) throw ex;
  });
  if (!block) return null;
  const { deploys } = await observer.getBlock(block.blockHash);
  const deploy = deploys.find(({ sig }) => sig === deployId);
  if (!deploy) {
    // This should not be possible if block is returned
    throw Error(`Deploy is not found in the block (${block.blockHash}).`);
  }
  return deploy;
}

/**
 * Get result of deploy
 * @param {Observer} observer
 * @param {DeployInfo} deploy
 * @returns { Promise<RhoExprWithBlock> }
 * @throws { Error } in case of execution error or missing data
 *
 * @typedef { import("./rnode-openapi-schema").RhoExprWithBlock } RhoExprWithBlock
 */
export async function listenAtDeployId(observer, deploy) {
  // Check deploy errors
  const { errored, systemDeployError } = deploy;
  if (errored) {
    throw Error(`Deploy error when executing Rholang code.`);
  } else if (systemDeployError) {
    throw Error(`${systemDeployError} (system error).`);
  }

  const target = { depth: 1, name: { UnforgDeploy: { data: deploy.sig } } };

  // Request for data at deploy signature (deployId)
  const { exprs } = await observer.listenForDataAtName(target);
  // Return data with cost (assumes data in one block)
  if (!exprs.length) throw new Error('no data at deployId');
  // TODO: return all exprs; let caller pick 1st
  return exprs[0];
}

/**
 *
 * @param {string} pkHex
 * @param { Observer } observer
 * @param {{
 *   setTimeout: typeof setTimeout,
 *   clock: () => Promise<number>,
 *   period?: number
 * }} sched
 * @returns { Account }
 *
 * @typedef {{
 *   sign: (term: string) => Promise<DeployRequest>,
 *   polling: () => Promise<void>, // throws to abort
 * }} Account
 */
export function makeAccount(
  pkHex,
  observer,
  { setTimeout, clock, period = 7500 },
  { phloPrice = 1, phloLimit = 250000 },
) {
  const polling = () =>
    new Promise((resolve) => {
      setTimeout(resolve, period);
    });

  return freeze({
    polling,

    /**
     * @param {string} term
     * @returns { Promise<DeployRequest> }
     */
    async sign(term) {
      const [timestamp, [recent]] = await Promise.all([
        clock(),
        observer.getBlocks(1),
      ]);
      return signDeploy(pkHex, {
        term,
        phloPrice,
        phloLimit,
        timestamp,
        validAfterBlockNumber: recent.blockNumber,
      });
    },
  });
}

/**
 * Sign, deploy, get block with deploy
 * @param {string} term
 * @param {Validator} validator
 * @param {Observer} observer
 * @param {Account} account
 * @returns {Promise<DeployInfo>}
 */
export async function startTerm(
  /** @type {string} */ term,
  validator,
  observer,
  account,
) {
  const signed = await account.sign(term);
  console.log('startTerm', { deployRequest: signed });
  console.log(term);

  const step1 = await validator.deploy(signed);
  if (!step1.startsWith('Success')) throw new Error(step1);

  for (;;) {
    const deploy = await checkForDeployInfo(observer, signed.signature);
    if (deploy) {
      return deploy;
    }
    await account.polling();
  }
}

/**
 * @param {Validator} validator
 * @param {Observer} observer
 * @param {{
 *   sign: (term: string) => Promise<DeployRequest>,
 *   polling: () => Promise<void>, // throws to abort
 * }} account
 *
 * TODO: marshalling / unmarshalling of object references
 *
 * @typedef { null | boolean | number | string } Scalar
 * @typedef {Scalar[] | {[k: string]: Scalar}} Complex
 *
 * @typedef {import('./rnode').Validator} Validator
 * @typedef {import('./rnode').Observer} Observer
 * @typedef {import('./rnode').DeployRequest} DeployRequest
 */
export function makeConnection(validator, observer, account) {
  const { stringify: lit } = JSON;
  const spread = (items) => lit(items).slice(1, -1); // strip []

  const start = (/** @type string */ term) =>
    startTerm(term, validator, observer, account);

  /**
   * @param {Scalar | Complex} tag
   * @param {string | Symbol | number} method
   * @param {(Scalar | Complex)[]} args
   */
  async function sendMessage(tag, method, args) {
    const term = `new return(\`rho:rchain:deployId\`), deployerId(\`rho:rchain:deployerId\`) in {
            match {[*deployerId, ${lit(tag)}]} {
              {*target} => target!(${spread([method, ...args])}, *return)
            }
          }`;
    const deploy = await start(term);
    const { expr } = await listenAtDeployId(observer, deploy);
    return RhoExpr.parse(expr);
  }

  function proxy(/** @type {Scalar | Complex} */ tag) {
    return new Proxy(freeze({}), {
      get: (obj, method) => {
        console.log('proxy get', { obj, tag, method });
        if (method === 'then') return null; // I'm not a Thenable.
        return (...args) => {
          console.log('proxy sendMessage', { tag, method, args });
          return sendMessage(tag, method, args);
        };
      },
    });
  }

  return freeze({
    /**
     * @param {Scalar | Complex} tag
     * @param {string} targetProc proc with defining use of the name `target`
     */
    async spawn(tag, targetProc) {
      const term = `new deployerId(\`rho:rchain:deployerId\`) in {
        match {[*deployerId, ${lit(tag)}]} {
          {*target} => { ${targetProc} }
        }
      }`;
      await start(term);
      return proxy(tag);
    },
  });
}
