/* global module, require */

const assert = require('assert');
const rchain = require('.');
const { RNode, RholangCrypto, REV, Ed25519keyPair, Hex } = rchain;

// mock enough of grpc
// ISSUE: refactor overlap with test/testRNode.js
function DeployService(_hostPort, _chan) {
  return Object.freeze({
    doDeploy(_dd, _auto = false) { return 'Success!'; }
  });
}
const casper = { DeployService };
const proto = { coop: { rchain: { casper: { protocol: casper } } } };
const grpc = {
  loadPackageDefinition(_d) { return proto; },
  credentials: { createInsecure() { } },
};

module.exports = {
  babel: false,
  globals: {
    RholangCrypto, RNode, REV, Hex, Ed25519keyPair,
    grpc,
    assert,
  },
};
