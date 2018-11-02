#!/usr/bin/env node
/** rclient -- CLI interface to gRPC API
 */

// @flow

/*global require, module*/
const { docopt } = require('docopt');

const { RNode } = require('./rnodeAPI');

const usage = `

Usage:
  rclient [options] deploy RHOLANG

Options:
 --host INT             The hostname or IPv4 address of the node
                        [default: localhost]
 --port INT             The tcp port of the nodes gRPC service
                        [default: 40401]
 -v --verbose           Verbose logging
 -h --help              show usage

`;


function main(argv, { grpc, clock, fs }) {
  const cli = docopt(usage, { argv: argv.slice(2) });
  if (cli['--verbose']) { console.log('options:', cli); }

  const myNode = RNode(grpc, { host: cli['--host'], port: cli['--port'] });

  if (cli.deploy) {
    const price = { phloPrice: { value: 1 }, phloLimit: { value: 10000 }, from: '0x01' };

    send(callback => fs.readFile(cli.RHOLANG, 'utf8', callback))
      .then((term) => {
        const timestamp = clock().valueOf();
        const nonce = 1;
        return myNode.doDeploy({ term, timestamp, nonce, ...price })
          .then((msg) => { console.log(msg); });
      })
      .catch((oops) => {
        console.log(`failed to deploy ${cli.RHOLANG}: ${oops.message}`);
      });
  }
}


// ISSUE: copy-and-paste from rnodeAPI
function send(calling) {
  function executor(resolve, reject) {
    const callback = (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    };

    calling(callback);
  }

  return new Promise(executor);
}


if (require.main === module) {
  // Import primitive effects only when invoked as main module.
  /* eslint-disable global-require */
  /*global process*/
  main(process.argv, {
    grpc: require('grpc'),
    clock: () => new Date(),
    fs: require('fs'),
  });
}
