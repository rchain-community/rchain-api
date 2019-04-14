/* global module, require, Buffer */

const assert = require('assert');

const rchain = require('.');
const { grpcMock } = require('./test/testRNode');
const { RHOCore, RhoTypes, RNode, RholangCrypto, REV, Hex, Ed25519keyPair } = rchain;


function config(env, grpcAccess) {
  const grpc = env.NODE_ENV === 'production' ? grpcAccess() : grpcMock();
  console.log('doctest env:', env.NODE_ENV || 'dev');

  return {
    babel: false,
    require: {
      url: require('url'),
      grpc: grpc,
      'rchain-api': { RHOCore, RhoTypes, RNode, RholangCrypto, REV, Hex, Ed25519keyPair },
    },
    globals: {
      assert, Buffer,
    },
  };
}

/* global process */
module.exports = config(process.env, () => require('grpc'));
