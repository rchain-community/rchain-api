/** rclient -- CLI interface to gRPC API
 */

// @flow

/*global require, module*/
const { docopt } = require('docopt');

const { RNode, simplifiedKeccak256Hash, h2b } = require('..');

const { loadRhoModules } = require('../test/loading'); // ISSUE: promote to src
const { fsReadAccess, fsWriteAccess } = require('./pathlib');

const usage = `

Usage:
  rclient [options] deploy RHOLANG
  rclient [options] register RHOMODULE...

Options:
 --host INT             The hostname or IPv4 address of the node
                        [default: localhost]
 --port INT             The tcp port of the nodes gRPC service
                        [default: 40401]
 --phlo-limit=N         how much are you willing to spend? [default: 10000]
 --phlo-price=N         TODO docs [default: 1]
 --registry=FILE        where to store file / URI mappings
                        [default: registry.json]
 -v --verbose           Verbose logging
 -h --help              show usage

`;

const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary


function main(argv, { grpc, clock, writeFile, readFile, join }) {
  const cli = docopt(usage, { argv: argv.slice(2) });
  if (cli['--verbose']) { console.log('options:', cli); }

  const rd = path => fsReadAccess(path, readFile, join);
  const argRd = arg => rd(cli[arg]);
  const argWr = arg => fsWriteAccess(cli[arg], writeFile, readFile, join);

  const where = { host: cli['--host'], port: cli['--port'] };
  const rnode = RNode(grpc, where);

  const priceInfo = () => ({
    phloPrice: parseInt(cli['--phlo-price'], 10),
    phloLimit: parseInt(cli['--phlo-limit'], 10),
    from: '0x01', // TODO: cli arg
  });

  if (cli.deploy) {
    deploy(argRd('RHOLANG'), priceInfo(), where, { rnode, clock })
      .catch((err) => { console.error(err); throw err; });
  } else if (cli.register) {
    register(
      cli.RHOMODULE.map(rd), KVDB(argWr('--registry')),
      priceInfo(), { rnode, clock },
    )
      .catch((err) => { console.error(err); throw err; });
  }
}


async function deploy(rholang, price, where, { rnode, clock }) {
  const term = await rholang.readText();
  const timestamp = clock().valueOf();
  try {
    const msg = await rnode.doDeploy({ term, timestamp, nonce: 1, ...price });
    console.log(msg);
  } catch (oops) {
    console.log(`failed to deploy ${rholang.name()} to ${where.host}:${where.port}: ${oops.message}`);
  }
}


async function register(files, registry, _price, { rnode, clock }) {
  // ISSUE: what to do when we restart the node?
  // how to check that we're talking to the same chain?
  async function check1(file) {
    const src = await file.readText();

    const srcHash = simplifiedKeccak256Hash(src);
    const mod = await registry.get(srcHash);
    return { src, srcHash, mod };
  }

  const loaded = await Promise.all(files.map(check1));

  async function ensure1({ src, srcHash, mod }) {
    if (!mod) {
      // ISSUE: loadRhoModules should take price info
      const [mod1] = await loadRhoModules([src], user, { rnode, clock });
      await registry.put(srcHash, mod1);
    }
  }

  return Promise.all(loaded.map(ensure1));
}


function KVDB(store) {
  async function load() {
    try {
      const txt = await store.readOnly().readText();
      return JSON.parse(txt);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return {};
      }
      throw err;
    }
  }

  async function get(k /*: string*/) {
    const info = await load();
    return info[k];
  }

  // ISSUE: atomic read / write
  async function put(k /*: string*/, v /*: mixed*/) {
    const info = await load();
    info[k] = v;
    await store.writeText(JSON.stringify(info, null, 2));
  }

  return Object.freeze({ get, put });
}


if (require.main === module) {
  // Import primitive effects only when invoked as main module.
  /* eslint-disable global-require */
  /*global process*/
  main(process.argv, {
    grpc: require('grpc'),
    clock: () => new Date(),
    readFile: require('fs').readFile,
    writeFile: require('fs').writeFile,
    join: require('path').join,
  });
}
