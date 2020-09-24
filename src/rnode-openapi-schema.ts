/**
 * based on:
 * https://github.com/rchain/rchain/blob/dev/docs/rnode-api/rnode-openapi-schema.ts
 */

/**
 * RhoExpr
 */
export type RhoExpr = {
  ExprMap?: ExprMap;
  ExprList?: ExprList;
  ExprTuple?: ExprTuple;
  ExprPar?: ExprPar;
  ExprUnforg?: ExprUnforg;
  ExprString?: ExprString;
  ExprInt?: ExprInt;
  ExprBool?: ExprBool;
  ExprUri?: ExprUri;
  ExprBytes?: ExprBytes;
};
/**
 * ExprList
 */
export type ExprList = { ExprList: { data: RhoExpr[] } };
/**
 * ExprPar
 */
export type ExprPar = { ExprPar: { data: RhoExpr[] } };
/**
 * BondInfo
 */
export type BondInfo = { validator?: string; stake?: number };
/**
 * ExprUri
 */
export type ExprUri = { ExprUri: { data: string } };
/**
 * ExprBytes
 */
export type ExprBytes = { ExprBytes: { data: string } };
/**
 * PrepareRequest
 */
export type PrepareRequest = {
  deployer: string;
  timestamp: number;
  nameQty: number;
};
/**
 * RhoUnforg
 */
export type RhoUnforg = {
  UnforgDeploy?: UnforgDeploy;
  UnforgDeployer?: UnforgDeployer;
  UnforgPrivate?: UnforgPrivate;
};
/**
 * UnforgPrivate
 */
export type UnforgPrivate = { data: string };
/**
 * ExploratoryDeployResponse
 */
export type ExploratoryDeployResponse = {
  expr: RhoExpr[];
  block: LightBlockInfo;
};
/**
 * DataResponse
 */
export type DataResponse = { exprs: RhoExprWithBlock[]; length: number };
/**
 * PrepareResponse
 */
export type PrepareResponse = { names: string[]; seqNumber: number };
/**
 * ExprString
 */
export type ExprString = { ExprString: { data: string } };
/**
 * RhoExprWithBlock
 */
export type RhoExprWithBlock = {
  expr: RhoExpr;
  block: LightBlockInfo;
};
/**
 * LightBlockInfo
 */
export type LightBlockInfo = {
  blockHash?: string;
  justifications?: JustificationInfo[];
  timestamp?: number;
  /**
   * com.google.protobuf.ByteString
   */
  extraBytes?: string;
  bonds?: BondInfo[];
  parentsHashList?: string[];
  shardId?: string;
  sigAlgorithm?: 'secp256k1';
  sig?: string;
  blockSize?: string;
  postStateHash?: string;
  version?: number;
  seqNum?: number;
  blockNumber?: number;
  sender?: string;
  /**
   * com.google.protobuf.ByteString
   */
  headerExtraBytes?: string;
  /**
   * com.google.protobuf.ByteString
   */
  bodyExtraBytes?: string;
  faultTolerance?: number;
  preStateHash?: string;
  deployCount?: number;
};
/**
 * ExploreDeployRequest
 */
export type ExploreDeployRequest = {
  term: string;
  blockHash: string;
  usePreStateHash: boolean;
};
/**
 * DeployData
 */
export type DeployData = {
  /**
   * conventionally in milliseconds though not constrained by real time
   */
  timestamp: number;
  term: string;
  /**
   * bound on computation to be paid for.
   */
  phloLimit: number;
  /**
   * price (in 10^-8 REV) of each unit of computation. typically 1
   */
  phloPrice: number;
  /**
   * number of a recent block
   */
  validAfterBlockNumber: number;
};
/**
 * DeployInfo
 */
export type DeployInfo = {
  timestamp?: number;
  /**
   * empty string indicates lack of error
   */
  systemDeployError?: string;
  term?: string;
  phloLimit?: number;
  sigAlgorithm?: 'secp256k1' | 'secp256k1:eth';
  deployer?: string;
  sig?: string;
  errored?: boolean;
  /**
   * in units of 10^-8 REV
   */
  cost?: number;
  /**
   * in units of 10^-8 REV
   */
  phloPrice?: number;
  validAfterBlockNumber?: number;
};
/**
 * JustificationInfo
 */
export type JustificationInfo = {
  validator?: string;
  latestBlockHash?: string;
};
/**
 * DeployRequest
 */
export type DeployRequest = {
  data: DeployData;
  deployer: string;
  signature: string;
  sigAlgorithm: 'secp256k1' | 'secp256k1:eth';
};
/**
 * ExprBool
 */
export type ExprBool = { ExprBool: { data: boolean } };
/**
 * UnforgDeploy
 */
export type UnforgDeploy = { UnforgDeploy: { data: string } };
/**
 * BlockInfo
 */
export type BlockInfo = {
  blockInfo?: LightBlockInfo;
  deploys?: DeployInfo[];
};
/**
 * ExprMap
 */
export type ExprMap = { ExprMap: { data: { [key: string]: RhoExpr } } };
/**
 * UnforgDeployer
 */
export type UnforgDeployer = { UnforgDeployer: { data: string } };
/**
 * ExprUnforg
 */
export type ExprUnforg = { ExprUnforg: { data: RhoUnforg } };
/**
 * ExprInt
 */
export type ExprInt = { ExprInt: { data: number } };
/**
 * DataRequest
 */
export type DataRequest = { name: RhoUnforg; depth: number };
/**
 * ExprTuple
 */
export type ExprTuple = { ExprTuple: { data: RhoExpr[] } };
