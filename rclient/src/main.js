/** rclient -- CLI interface to gRPC API
 */

// @flow

/*global require, module, Buffer */
const read = require('read');

const { docopt } = require('docopt');
const { RNode, RHOCore, simplifiedKeccak256Hash, h2b, b2h } = require('rchain-api');

const { sigTool } = require('./sigTool');
const { loadRhoModules } = require('../../src/loading'); // ISSUE: path?
const { fsReadAccess, fsWriteAccess, FileStorage } = require('./pathlib');
const { asPromise } = require('./asPromise');
const secretStorage = require('./secretStorage');

const usage = `

Usage:
  rclient [options] account --new LABEL
  rclient [options] import LABEL JSONFILE
  rclient [options] sign LABEL [ --json ] DATAFILE
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
 --keystore=FILE        [default: keystore.json]
 -v --verbose           Verbose logging
 -h --help              show usage

`;

/*::
import type { SecretStorageV3, AES128CTR, SCrypt } from './secretStorage';
 */
const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary


function main(
  argv,
  clock,
  { stdin, stdout },
  { writeFile, readFile, join },
  { nacl, grpc, uuidv4 },
) {
  const cli = docopt(usage, { argv: argv.slice(2) });
  if (cli['--verbose']) { console.log('options:', cli); }

  const rd = path => fsReadAccess(path, readFile, join);
  const argRd = arg => rd(cli[arg]);
  const argWr = arg => fsWriteAccess(cli[arg], writeFile, readFile, join);
  function getpass(prompt /*: string*/) {
    return asPromise(
      f => read({ input: stdin, output: stdout, silent: true, prompt }, f),
    );
  }

  const where = { host: cli['--host'], port: cli['--port'] };
  const rnode = RNode(grpc, where);

  const priceInfo = () => ({
    phloPrice: parseInt(cli['--phlo-price'], 10),
    phloLimit: parseInt(cli['--phlo-limit'], 10),
    from: '0x01', // TODO: cli arg
  });

  if (cli.account) {
    newAccount(argWr('--keystore'), cli.LABEL, { getpass, nacl, uuidv4 });
  } else if (cli.import) {
    importKey(argWr('--keystore'), cli.LABEL, argRd('JSONFILE'), { getpass });
  } else if (cli.sign) {
    const input = { data: argRd('DATAFILE'), json: cli['--json'] };
    signMessage(argWr('--keystore'), cli.LABEL, input, { getpass, nacl });
  }
  if (cli.deploy) {
    deploy(argRd('RHOLANG'), priceInfo(), where, { rnode, clock })
      .catch((err) => { console.error(err); throw err; });
  } else if (cli.register) {
    register(
      cli.RHOMODULE.map(rd), FileStorage(argWr('--registry')),
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
      await registry.set({ [srcHash]: mod1 });
    }
  }

  return Promise.all(loaded.map(ensure1));
}


async function newAccount(keyStore, label, { getpass, nacl, uuidv4 }) {
  const store = FileStorage(keyStore);

  const taken = await store.get(label);
  if (taken[label]) {
    console.error(`Key ${label} already exists.`);
    return;
  }

  const password = await getpass(`Password for ${label}:`);
  const passconf = await getpass(`Confirm password for ${label}:`);
  if (password !== passconf) {
    console.error('Passwords do not match.');
    return;
  }

  try {
    const privateKey = Buffer.from(nacl.randomBytes(32));
    const item = secretStorage.encrypt(
      privateKey,
      Buffer.from(password),
      n => Buffer.from(nacl.randomBytes(n)),
      uuidv4,
    );
    await store.set({ [label]: item });
    console.log({ label, savedTo: keyStore.readOnly().name() });
  } catch (oops) {
    console.error(oops);
  }
}


async function importKey(keyStore, label, jsonKeyfile, { getpass }) {
  const store = FileStorage(keyStore);

  const password = await getpass(`Password for ${jsonKeyfile.name()}: `);
  const code = await jsonKeyfile.readText();
  const item = JSON.parse(code);

  if (item.Crypto) {
    item.crypto = item.Crypto;
    delete item.Crypto;
  }
  if (item.crypto.kdf !== 'scrypt') {
    console.log('unsupported kdf:', item.crypto.kdf);
    return;
  }
  if (item.crypto.cipher !== 'aes-128-ctr') {
    console.log('unsupported cipher:', item.crypto.cipher);
    return;
  }

  // ISSUE: just check MAC?
  try {
    secretStorage.decrypt(Buffer.from(password), item);
  } catch (oops) {
    console.error('cannot load; bad password?');
    return;
  }

  await store.set({ [label]: item });
}


async function signMessage(keyStore, label, input, { getpass, nacl }) {
  const store = FileStorage(keyStore);

  const keys = await store.get(label);
  if (!keys[label]) {
    console.log(`N such key: ${label}.`);
    return;
  }

  let message;
  if (input.json) {
    const code = await input.data.readText();
    const data = JSON.parse(code);
    const par = RHOCore.fromJSData(data);
    const rholang = RHOCore.toRholang(par);
    console.log('JavaScript data:');
    console.log(data);
    console.log('Rholang data:');
    console.log(rholang);
    message = RHOCore.toByteArray(par);
  } else {
    message = await input.data.readBytes();
  }
  console.log('byte length:', message.length);

  const password = await getpass(`Password for ${label}: `);

  try {
    const item /*: SecretStorageV3<AES128CTR, SCrypt>*/ = keys[label]; // TODO: mixed -> SecretStorage
    const seed = secretStorage.decrypt(Buffer.from(password), item);
    const keyPair = nacl.sign.keyPair.fromSeed(seed);
    const sig = nacl.sign.detached(message, keyPair.secretKey);
    console.log(b2h(sig));
  } catch (oops) {
    console.error('cannot decrypt private key; bad password?');
    console.error(oops.message);
  }
}


if (require.main === module) {
  // Import primitive effects only when invoked as main module.
  /* eslint-disable global-require */
  /*global process*/
  main(
    process.argv,
    () => new Date(), // clock
    {
      stdin: process.stdin,
      stdout: process.stdout,
    },
    {
      readFile: require('fs').readFile,
      writeFile: require('fs').writeFile,
      join: require('path').join,
    },
    {
      grpc: require('grpc'),
      nacl: require('tweetnacl'),
      uuidv4: require('uuid/v4'),
    },
  );
}
