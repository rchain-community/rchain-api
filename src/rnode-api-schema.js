/**
 * @typedef {{
    type:
      | "ExprList"
      | "ExprPar"
      | "ExprUri"
      | "ExprBytes"
      | "ExprString"
      | "ExprBool"
      | "ExprMap"
      | "ExprUnforg"
      | "ExprInt"
      | "ExprTuple";
  }} RhoExpr

 * @typedef { RhoExpr & { data: RhoExpr[] } ExprList
 * @typedef { RhoExpr & { data: RhoExpr[] } ExprPar
 * @typedef { RhoExpr & { data: string } } ExprUri
 * @typedef { RhoExpr & { data: string } }   ExprBytes
 * @typedef { RhoExpr & { data: string } }   ExprString
 * @typedef { RhoExpr & { data: boolean } }   ExprBool
 * @typedef { RhoExpr & { data: { [key: string]: ref } } }   ExprMap
 * @typedef { RhoExpr & { data: RhoUnforg } }   ExprUnforg
 * @typedef { RhoExpr & { data: number } }   ExprInt
 * @typedef { RhoExpr & { data: RhoExpr[] } }   ExprTuple

 * @typedef { { type: "UnforgDeploy" | "UnforgDeployer" | "UnforgPrivate" } }   RhoUnforg

 * @typedef { RhoUnforg & { data: string } }   UnforgDeploy
 * @typedef { RhoUnforg & { data: string } }   UnforgDeployer
 * @typedef { RhoUnforg & { data: string } }   UnforgPrivate
 */

/**
 * @typedef {{ validator?: string; stake?: number }} BondInfo
 */

/**
 * @typedef { { deployer: string; timestamp: number; nameQty: number } }   PrepareRequest
 */

/**
 * @typedef {{
 *   expr: RhoExpr[];
 *   block: LightBlockInfo
 * }} ExploratoryDeployResponse
 */

/**
 * @typedef { { exprs: RhoExprWithBlock[]; length: number } }   DataResponse
 */

/**
 * @typedef { { names: string[]; seqNumber: number } }   PrepareResponse
 */

/**
 * @typedef {{
    expr: RhoExpr;
    block: LightBlockInfo;
  }} RhoExprWithBlock
 */

/**
 * @typedef {{
    blockHash?: string;
    justifications?: JustificationInfo[];
    timestamp?: number;
    // com.google.protobuf.ByteString
    extraBytes?: string;
    bonds?: BondInfo[];
    parentsHashList?: string[];
    shardId?: string;
    sigAlgorithm?: "secp256k1";
    sig?: string;
    blockSize?: string;
    postStateHash?: string;
    version?: number;
    seqNum?: number;
    blockNumber?: number;
    sender?: string;
    //com.google.protobuf.ByteString
    headerExtraBytes?: string;
    // com.google.protobuf.ByteString
    bodyExtraBytes?: string;
    faultTolerance?: number;
    preStateHash?: string;
    deployCount?: number;
  }} LightBlockInfo
 */

/**
 * @typedef {{
    term: string;
    blockHash: string;
    usePreStateHash: boolean;
  }} ExploreDeployRequest
 */

/**
 * @typedef {{
    // conventionally in milliseconds though not constrained by real time
    timestamp: number;
    term: string;
    //bound on computation to be paid for.
    phloLimit: number;
    // price (in 10^-8 REV) of each unit of computation. typically 1
    phloPrice: number;
    // number of a recent block
    validAfterBlockNumber: number;
  }} DeployData
 */

/**
 * @typedef {{
    timestamp?: number;
    // empty string indicates lack of error
    systemDeployError?: string;
    term?: string;
    phloLimit?: number;
    sigAlgorithm?: "secp256k1" | "secp256k1:eth";
    deployer?: string;
    sig?: string;
    errored?: boolean;
    // in units of 10^-8 REV
    cost?: number;
    // in units of 10^-8 REV
    phloPrice?: number;
    validAfterBlockNumber?: number;
  }} DeployInfo
 */

/**
 * @typedef { { validator?: string; latestBlockHash?: string } }   JustificationInfo
 */

/**
 * A DeployRequest consists of a DeployData plus a signature compouted over the protobuf
 * serialization of the DeployData.
 * The secp256k1 algorithm indicates DER format; secp256k1:eth indicates RS format.
 * @typedef {{
    data: DeployData;
    deployer: string;
    signature: string;
    sigAlgorithm: "secp256k1" | "secp256k1:eth";
  }} DeployRequest
 */

/**
  * @typedef {{
    blockInfo?: LightBlockInfo;
    deploys?: DeployInfo[];
  }} BlockInfo
 */

/**
 * @typedef { { name: RhoUnforg; depth: number } }   DataRequest
 */
