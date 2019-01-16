/** rclient -- CLI interface to gRPC API
 */

// @flow

/*global require, module, Buffer */
const assert = require('assert');
const read = require('read');
const { URL } = require('url');

const secp256k1 = require('secp256k1'); // ISSUE: push into rchain-api?
const { docopt } = require('docopt');
const {
  RNode, RHOCore, simplifiedKeccak256Hash, h2b, b2h, sendCall,
  keccak256Hash,
} = require('rchain-api');
const { GPrivate } = require('../../protobuf/RhoTypes.js');

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
  rclient [options] account --get-balance LABEL
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
  { stdin, stdout, randomBytes },
  { writeFile, readFile, join },
  { grpc, uuidv4 },
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
    newAccount(argWr('--keystore'), cli.LABEL, { getpass, randomBytes, uuidv4 });
  } else if (cli.account && cli['--import']) {
    importKey(argWr('--keystore'), cli.LABEL, argRd('JSONFILE'), { getpass });
  } else if (cli.account && cli['--show-public']) {
    // ISSUE: store un-encrypted public key? "compromises privacy" per Web3 docs.

    // ISSUE: we only need read-only access to the key store;
    // should WriteAccess extend ReadAccess?
    showPublic(argWr('--keystore'), cli.LABEL, { getpass });
  } else if (cli.account && cli['--claim']) {
    claimAccount(argWr('--keystore'), cli.LABEL, priceInfo(), { getpass, rnode, clock });
  } else if (cli.account && cli['--get-balance']) {
    getBalance(cli.LABEL, priceInfo(), { keyStore: argWr('--keystore'), getpass, rnode, clock });
  } else if (cli.sign) {
    const input = { data: argRd('DATAFILE'), json: cli['--json'] };
    signMessage(argWr('--keystore'), cli.LABEL, input, { getpass });
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


async function newAccount(keyStore, label, { getpass, randomBytes, uuidv4 }) {
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
    let privKey;
    do {
      privKey = randomBytes(32);
    } while (!secp256k1.privateKeyVerify(privKey));
    const item = secretStorage.encrypt(
      privKey,
      Buffer.from(password),
      n => randomBytes(n),
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


async function loadKey(keyStore, label, notice, { getpass }) /*: Promise<Buffer> */{
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
  const privKey = secretStorage.decrypt(Buffer.from(password), item);
  return privKey;
}


async function signMessage(keyStore, label, input, { getpass }) {
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
    const privKey = await loadKey(keyStore, label, notice, { getpass });
    const sigObj = secp256k1.sign(message, privKey);
    console.log(b2h(sigObj.signature));
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
  }
}


async function showPublic(keyStore, label, { getpass }) {
  try {
    const privKey = await loadKey(keyStore, label, [], { getpass });
    // ISSUE: logging is not just FYI here;
    // should be passed as an explicit capability.
    const pubKey = privateToPublic(privKey);
    console.log({ label, publicKey: b2h(pubKey) });
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
  }
}

// ISSUE: move to secretStorage
function privateToPublic(privKey) {
  return secp256k1.publicKeyCreate(privKey, false).slice(1);
}

function pubToAddress(pubKey) {
  assert.equal(pubKey.length, 64);
  return keccak256Hash(pubKey).slice(-20);
}


// https://github.com/rchain/rchain/blob/dev/casper/src/main/rholang/WalletCheck.rho
const WalletCheck = new URL('rho:id:oqez475nmxx9ktciscbhps18wnmnwtm6egziohc3rkdzekkmsrpuyt');

async function claimAccount(keyStore, label, priceInfo, { getpass, rnode, clock }) {
  let privKey;
  let pubKey;
  let ethAddr;
  try {
    privKey = await loadKey(keyStore, label, [], { getpass });
    pubKey = privateToPublic(privKey);
    ethAddr = `0x${b2h(pubToAddress(pubKey))}`;
    // ISSUE: logging is not just FYI here;
    // should be passed as an explicit capability.
    console.log({ label, pubKey: b2h(pubKey), ethAddr });
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
    return;
  }

  const tClaim = clock().valueOf();
  const [statusId] = await rnode.previewPrivateIds({ timestamp: tClaim, user }, 1);
  const statusOut /*: IPar */= { ids: [{ id: statusId }] };
  console.log({ statusOut: prettyPrivate(statusOut) });
  const hash = Buffer.from(keccak256Hash(RHOCore.toByteArray(RHOCore.fromJSData(
    [b2h(pubKey), GPrivate.create({ id: statusId })],
  ))));
  const sigObj = secp256k1.sign(hash, privKey);
  const sigDER = secp256k1.signatureExport(sigObj.signature);

  const status = await sendCall(
    { target: WalletCheck, method: 'claim', args: [ethAddr, b2h(pubKey), b2h(sigDER)/*, statusOut */] },
    { ...priceInfo, user, timestamp: tClaim },
    { rnode, returnCh: statusOut, insertSigned: true },
  );
  console.log({ status });
}

async function getBalance(label, priceInfo, { keyStore, getpass, rnode, clock }) {
  let privKey;
  let pubKey;
  let ethAddr;
  try {
    privKey = await loadKey(keyStore, label, [], { getpass });
    pubKey = privateToPublic(privKey);
    ethAddr = `0x${b2h(pubToAddress(pubKey))}`;
    // ISSUE: logging is not just FYI here;
    // should be passed as an explicit capability.
    console.log({ label, pubKey: b2h(pubKey), ethAddr });
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
    return;
  }

  // ISSUE: push run() down into the API somewhere?
  async function run(term) {
    const timestamp = clock().valueOf();
    console.log('run:', { timestamp });
    const [returnChan] = await rnode.previewPrivateChannels({ timestamp, user }, 1);
    console.log({ returnChan: prettyPrivate(returnChan) });
    console.log(term);
    await rnode.doDeploy({ ...priceInfo, timestamp, user, term }, true);
    const blockResults = await rnode.listenForDataAtName(returnChan);
    if (!(blockResults.length > 0)) { throw new Error('no data at return channel'); }
    const answerPar = blockResults[0].postBlockData[0];
    // console.log('answerPar', JSON.stringify(answerPar, null, 2));
    return RHOCore.toJSData(answerPar);
  }

  const balance = await run(`new return, wCh, rlCh,
  trace(\`rho:io:stderr\`), lookup(\`rho:registry:lookup\`) in {
    trace!({"getBalance": *return, "trace": *trace}) |
    lookup!(\`${String(WalletCheck)}\`, *rlCh) | for (@(_, *WalletCheck) <- rlCh) {
      WalletCheck!("access", "${b2h(pubKey)}", *wCh) | for(@(ok, *maybeWallet) <- wCh) {
        if(ok) { maybeWallet!("getBalance", *return) }
        else{ trace!({"problem": *maybeWallet}) | return!(Nil) }
      }
    }
  }`);
  console.log({ balance });
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
      randomBytes: require('crypto').randomBytes,
    },
    {
      readFile: require('fs').readFile,
      writeFile: require('fs').writeFile,
      join: require('path').join,
    },
    {
      grpc: require('grpc'),
      uuidv4: require('uuid/v4'),
    },
  );
}
