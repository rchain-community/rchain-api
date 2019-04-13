/* global module, require, Buffer */

const assert = require('assert');

const rchain = require('.');
const { grpcMock } = require('./test/testRNode');
const { RNode, RholangCrypto, REV, Ed25519keyPair, Hex } = rchain;


function config(env, grpcAccess) {
  const grpc = env.NODE_ENV === 'production' ? grpcAccess() : grpcMock();
  console.log('doctest env:', env.NODE_ENV);

  return {
    babel: false,
    require: {
      grpc: grpc,  // ISSUE: live access at test time?
    },
    globals: {
      assert, Buffer,
      grpc,
      RholangCrypto, RNode, REV, Hex, Ed25519keyPair,
    },
  };
}

/* global process */
module.exports = config(process.env, () => require('grpc'));
