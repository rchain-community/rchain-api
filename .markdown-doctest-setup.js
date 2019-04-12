/* global module, require, Buffer */

const assert = require('assert');

const rchain = require('.');
const { RNode, RholangCrypto, REV, Ed25519keyPair, Hex } = rchain;


// mock enough of grpc
// ISSUE: refactor overlap with test/testRNode.js
const CasperMessage = require('./protobuf/CasperMessage');
const { Either } = CasperMessage;
const { BlockInfoWithoutTuplespace } = CasperMessage.coop.rchain.casper.protocol;

function DeployService(_hostPort, _chan) {
  return Object.freeze({
    doDeploy(_dd, _auto = false) { return 'Success!'; },
    showBlocks(_depth) {
      const block4 = { value: BlockInfoWithoutTuplespace.encode({ blockNumber: 4 }).finish() };

      return Object.freeze({
        on(name, handler) {
          if (name === 'data') {
            handler({ success: { response: block4 } });
          } else if (name === 'end') {
            handler();
          }
        }
      });
    },
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
  require: {
    grpc: grpc,  // ISSUE: live access at test time?
  },
  globals: {
    assert, Buffer,
    grpc,
    RholangCrypto, RNode, REV, Hex, Ed25519keyPair,
  },
};
