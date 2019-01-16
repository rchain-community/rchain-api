/** rclient -- CLI interface to gRPC API
 */

// @flow

/*global require, module, Buffer */
const read = require('read');
const { URL } = require('url');

const secp256k1 = require('secp256k1'); // ISSUE: push into rchain-api?
const { docopt } = require('docopt');
const {
  RNode, RHOCore, simplifiedKeccak256Hash, h2b, b2h, sendCall,
  keccak256Hash,
} = require('rchain-api');

const { loadRhoModules, prettyPrivate } = require('../../src/loading'); // ISSUE: path?
const { fsReadAccess, fsWriteAccess, FileStorage } = require('./pathlib');
const { asPromise } = require('./asPromise');
const secretStorage = require('./secretStorage');

const usage = `

Usage:
  rclient [options] account --new LABEL
  rclient [options] account --import LABEL JSONFILE
  rclient [options] account --show-public LABEL
  rclient [options] account --claim LABEL
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
const defaultDeployInfo = {
  user,
  from: '0x01', // TODO: cli arg
  nonce: 1,
  timestamp: -1,
  term: 'syntax error',
  sigAlgorithm: 'N/A',
  sig: h2b(''),
  phloLimit: 0,
  phloPrice: 0,
};


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
    ...defaultDeployInfo,
    phloPrice: parseInt(cli['--phlo-price'], 10),
    phloLimit: parseInt(cli['--phlo-limit'], 10),
  });

  if (cli.account && cli['--new']) {
    newAccount(argWr('--keystore'), cli.LABEL, { getpass, nacl, uuidv4 });
  } else if (cli.iaccount && cli['--import']) {
    importKey(argWr('--keystore'), cli.LABEL, argRd('JSONFILE'), { getpass });
  } else if (cli.account && cli['--show-public']) {
    // ISSUE: store un-encrypted public key? "compromises privacy" per Web3 docs.

    // ISSUE: we only need read-only access to the key store;
    // should WriteAccess extend ReadAccess?
    showPublic(argWr('--keystore'), cli.LABEL, { getpass, nacl });
  } else if (cli.account && cli['--claim']) {
    claimAccount(argWr('--keystore'), cli.LABEL, priceInfo(), { getpass, nacl, rnode, clock });
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


async function loadKey(keyStore, label, notice, { getpass, nacl }) {
  const store = FileStorage(keyStore);

  const keys = await store.get(label);
  if (!keys[label]) {
    throw new Error(`No such key: ${label}.`);
  }

  // ISSUE: logging is not just FYI here;
  // should be passed as an explicit capability.
  notice.forEach((args) => {
    console.log(...args);
  });

  const password = await getpass(`Password for ${label}: `);

  // TODO: mixed -> SecretStorage
  const item /*: SecretStorageV3<AES128CTR, SCrypt>*/ = keys[label];
  const seed = secretStorage.decrypt(Buffer.from(password), item);
  return nacl.sign.keyPair.fromSeed(seed);
}


async function signMessage(keyStore, label, input, { getpass, nacl }) {
  let message;
  let notice = [];
  if (input.json) {
    const code = await input.data.readText();
    const data = JSON.parse(code);
    const par = RHOCore.fromJSData(data);
    const rholang = RHOCore.toRholang(par);
    notice = [
      ['JavaScript data:'],
      [data],
      ['Rholang data:'],
      [rholang],
    ];
    message = RHOCore.toByteArray(par);
  } else {
    message = await input.data.readBytes();
  }
  notice.push(['byte length:', message.length]);

  try {
    const keyPair = await loadKey(keyStore, label, notice, { getpass, nacl });
    const sig = nacl.sign.detached(message, keyPair.secretKey);
    console.log(b2h(sig));
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
  }
}


async function showPublic(keyStore, label, { getpass, nacl }) {
  try {
    const keyPair = await loadKey(keyStore, label, [], { getpass, nacl });
    // ISSUE: logging is not just FYI here;
    // should be passed as an explicit capability.
    console.log({ label, publicKey: b2h(keyPair.publicKey) });
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
  }
}


async function claimAccount(keyStore, label, priceInfo, { getpass, nacl, rnode, clock }) {
  let keyPair;
  try {
    keyPair = await loadKey(keyStore, label, [], { getpass, nacl });
    // ISSUE: logging is not just FYI here;
    // should be passed as an explicit capability.
    console.log({ label, publicKey: b2h(keyPair.publicKey) });
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
    return;
  }

  // https://github.com/rchain/rchain/blob/dev/casper/src/main/rholang/WalletCheck.rho
  const WalletCheck = new URL('rho:id:oqez475nmxx9ktciscbhps18wnmnwtm6egziohc3rkdzekkmsrpuyt');

  const tClaim = clock().valueOf();
  const [statusOut] = await rnode.previewPrivateChannels({ timestamp: tClaim, user }, 1);
  console.log({ statusOut: prettyPrivate(statusOut) });
  const hash = Buffer.from(keccak256Hash(RHOCore.toByteArray(RHOCore.fromJSData(
    [keyPair.publicKey, statusOut],
  ))));
  const privateKey = keyPair.secretKey.slice(0, 32); // chop off nacl's pubKey
  const sig = secp256k1.sign(hash, privateKey).signature;

  const pubKey = b2h(keyPair.publicKey);
  const ethAddr = keccak256Hash(keyPair.publicKey).slice(12, 32);
  const status = await sendCall(
    { target: WalletCheck, method: 'claim', args: [ethAddr, pubKey, b2h(sig)/*, statusOut */] },
    { ...priceInfo, user, timestamp: tClaim },
    { rnode, returnCh: statusOut, insertSigned: true },
  );
  console.log({ status });
  // TODO: get balance
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
