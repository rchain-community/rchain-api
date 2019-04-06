#!/usr/bin/env node
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
  RNode, RHOCore, simplifiedKeccak256Hash, h2b, b2h,
  keccak256Hash, keyPair, makeProxy, blake2b256Hash,
  RevAddress,
} = require('rchain-api');
const { loadRhoModules } = require('../../src/loading'); // ISSUE: path?

const { fsReadAccess, fsWriteAccess, FileStorage } = require('./pathlib');
const { asPromise } = require('./asPromise');
const secretStorage = require('./secretStorage');
const { link } = require('./assets');
const rhoid = require('./rhoid');

const usage = `
Usage:
  rclient [options] keygen LABEL
  rclient [options] import LABEL JSONFILE
  rclient [options] info LABEL
  rclient [options] claim LABEL
  rclient [options] balance LABEL
  rclient [options] publish [--claimed] LABEL
  rclient [options] send --from=LABEL --to=URI AMOUNT
  rclient [options] sign LABEL [ --json ] DATAFILE
  rclient [options] deploy RHOLANG
  rclient [options] register RHOMODULE...

Options:
 keygen                 generate new secret key
                        and associate with LABEL in keystore
 --keystore=FILE        [default: keystore.json]
 import                 import key from JSONFILE as LABEL
                        (per ethereum Web3 Secret Storage)
 info                   show public key and ethereum-style address
                        after decrypting with password
 claim                  claim REV balance from RHOC after genesis
 publish                register a wallet at the rhoid derived
                        from the key. If --claimed, get the wallet
                        from WalletCheck; else, create a new empty wallet.
 balance                get REV balance after publishing account
 --host INT             The hostname or IPv4 address of the node
                        [default: localhost]
 --port INT             The tcp port of the nodes gRPC service
                        [default: 40401]
 --phlo-limit=N         how much are you willing to spend? [default: 10000]
 --phlo-price=N         TODO docs [default: 1]
 deploy                 deploy RHOLANG file
 register               deploy RHOMODULE, register exported process,
                        and save URI in registry file
 --registry=FILE        where to store file / URI mappings
                        [default: registry.json]
 -v --verbose           Verbose logging
 -h --help              show usage

`;

/*::
import type { SecretStorageV3, AES128CTR, SCrypt } from './secretStorage';

import type { ModuleInfo } from '../../src/loading'; // ISSUE: path?
 */
const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary
const defaultDeployInfo = {
  user,
  from: '0x01', // TODO: cli arg
  nonce: 1,
  timestamp: -1,
  // ISSUE: refine types so fields are optional in the right cases
  term: 'syntax error',
  sigAlgorithm: 'N/A',
  sig: h2b(''),
  phloLimit: 0,
  phloPrice: 0,
};


function ExitStatus(message) {
  this.message = message;
}

async function main(
  argv,
  { stdin, stdout, writeFile, readFile, join },
  { clock, randomBytes },
  { grpc, uuidv4 },
) {
  const cli = docopt(usage, { argv: argv.slice(2) });
  if (cli['--verbose']) { console.log('options:', argv, cli); }

  const rd = path => fsReadAccess(path, readFile, join);
  const argRd = arg => rd(cli[arg]);
  const argWr = arg => fsWriteAccess(cli[arg], writeFile, readFile, join);
  function argInt(name) {
    try {
      return parseInt(cli[name], 10);
    } catch (oops) {
      console.error(oops.message);
      throw oops;
    }
  }

  function getpass(prompt /*: string*/) {
    return asPromise(
      f => read({ input: stdin, output: stdout, silent: true, prompt }, f),
    );
  }

  const where = { host: cli['--host'], port: argInt('--port') };
  const rnode = RNode(grpc, where);

  const priceInfo = () => ({
    ...defaultDeployInfo,
    phloPrice: argInt('--phlo-price'),
    phloLimit: argInt('--phlo-limit'),
  });

  async function ioTools() {
    const registry = FileStorage(argWr('--registry'));
    const toolsMod = await ensureLoaded('tools.rho', link('./tools.rho'), { registry });
    return { getpass, rnode, clock, toolsMod, keyStore: argWr('--keystore') };
  }

  if (cli.keygen) {
    await keygen(argWr('--keystore'), cli.LABEL, { getpass, randomBytes, uuidv4 });
  } else if (cli.import) {
    await importKey(argWr('--keystore'), cli.LABEL, argRd('JSONFILE'), { getpass });
  } else if (cli.info) {
    // ISSUE: store un-encrypted public key? "compromises privacy" per Web3 docs.

    // ISSUE: we only need read-only access to the key store;
    // should WriteAccess extend ReadAccess?
    await showPublic(cli.LABEL, { getpass, keyStore: argWr('--keystore') });
  } else if (cli.claim) {
    const io = await ioTools();
    await claimAccount(cli.LABEL, priceInfo(), io);
  } else if (cli.balance) {
    const io = await ioTools();
    await getBalance(cli.LABEL, priceInfo(), io);
  } else if (cli.publish) {
    const io = await ioTools();
    await publish(cli.LABEL, cli['--claimed'], priceInfo(), io);
  } else if (cli.send) {
    const io = await ioTools();
    await sendPayment(argInt('AMOUNT'), cli['--from'], new URL(cli['--to']), priceInfo(), io);
  } else if (cli.sign) {
    const input = { data: argRd('DATAFILE'), json: cli['--json'] };
    await signMessage(argWr('--keystore'), cli.LABEL, input, { getpass });
  } else if (cli.deploy) {
    await deploy(argRd('RHOLANG'), priceInfo(), where, { rnode, clock })
      .catch((err) => { console.error(err); throw err; });
  } else if (cli.register) {
    await register(
      cli.RHOMODULE.map(rd), priceInfo(), { rnode, clock, registry: FileStorage(argWr('--registry')) },
    );
  }

  // ISSUE: process exit code
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


async function register(files, _price, { registry, rnode, clock }) {
  // ISSUE: what to do when we restart the node?
  // how to check that we're talking to the same chain?
  async function check1(file) {
    const src = await ioOrExit(file.readText());

    const srcHash = simplifiedKeccak256Hash(src);
    const mods = await ioOrExit(registry.get(srcHash));
    return { file, src, srcHash, mod: mods[srcHash] };
  }

  const status = await Promise.all(files.map(check1));
  status.filter(({ mod }) => !!mod).forEach(({ file, mod }) => {
    console.log({ file: file.name(), uri: mod.URI, status: 'loaded already' });
  });

  const toLoad = status.filter(({ mod }) => !mod);
  if (toLoad.length > 0) {
    console.log('loading:', toLoad.map(({ file }) => file.name()));
    const loaded = await ioOrExit(
      loadRhoModules(toLoad.map(({ src }) => src), user, { rnode, clock }),
    );
    registry.set(collect(loaded.map((m, ix) => [toLoad[ix].srcHash, m])));
    loaded.forEach((m, ix) => {
      console.log({ status: 'newly loaded', file: toLoad[ix].file.name(), uri: String(m.URI) });
    });
  }
}

// [[p1, v1], [p2, v2], ...] => { p1: v1, p2: v2, ... }
function collect/*:: <T>*/(props /*: [string, T][]*/) /*{ [string]: T } */{
  return props.reduce((acc, [s, m]) => ({ ...acc, [s]: m }), {});
}

async function ioOrExit/*::<T>*/(p /*: Promise<T>*/) /*: Promise<T>*/ {
  try {
    return await p;
  } catch (err) {
    throw new ExitStatus(err.message);
  }
}


async function keygen(keyStore, label, { getpass, randomBytes, uuidv4 }) {
  const store = FileStorage(keyStore);

  const taken = await store.get(label);
  if (taken[label]) { throw new ExitStatus(`Key ${label} already exists.`); }

  const password = await getpass(`Password for ${label}:`);
  const passconf = await getpass(`Confirm password for ${label}:`);
  if (password !== passconf) { throw new ExitStatus('Passwords do not match.'); }

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
  console.log({ label, keyStore: keyStore.readOnly().name(), status: 'saved' });
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
    throw new ExitStatus(`unsupported kdf: ${item.crypto.kdf}`);
  }
  if (item.crypto.cipher !== 'aes-128-ctr') {
    throw new ExitStatus(`unsupported cipher: ${item.crypto.cipher}`);
  }

  try {
    const privKey = secretStorage.decrypt(Buffer.from(password), item);
    const pubKey = privateToPublic(privKey);
    const ethAddr = `0x${b2h(pubToAddress(pubKey))}`;
    await store.set({ [label]: item });
    console.log({ label, ethAddr, keyStore: keyStore.readOnly().name() });
  } catch (err) {
    throw new ExitStatus(`cannot import key: ${err.message}`);
  }
}


async function loadKey(keyStore, label, notice, { getpass }) /*: Promise<Buffer> */{
  const store = FileStorage(keyStore);

  const keys = await ioOrExit(store.get(label));
  if (!keys[label]) { throw new ExitStatus(`No such key: ${label}.`); }

  // ISSUE: logging is not just FYI here;
  // should be passed as an explicit capability.
  notice.forEach((args) => {
    console.log(...args);
  });

  const password = await getpass(`Password for ${label}: `);

  // $FlowFixMe$ TODO: mixed -> SecretStorage
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


async function showPublic(label, { keyStore, getpass }) {
  try {
    const privKey = await loadKey(keyStore, label, [], { getpass });
    // ISSUE: logging is not just FYI here;
    // should be passed as an explicit capability.
    const pubKey = privateToPublic(privKey);
    const ethAddr = `0x${b2h(pubToAddress(pubKey))}`;
    const edKey = keyPair(privKey); // ed25519
    const revAddr = RevAddress.fromPublicKey(h2b(edKey.publicKey())).toString();
    console.log({ label, publicKey: b2h(pubKey), ethAddr, revAddr });
  } catch (oops) {
    console.error('cannot load key');
    console.error(oops.message);
  }
}

// ISSUE: move to secretStorage
function privateToPublic(privKey) {
  const der = secp256k1.publicKeyCreate(privKey, false);
  assert.equal(der.length, 65);
  // chop off 0x04 DER byte sequence tag?
  return der.slice(1);
}

function pubToAddress(pubKey) {
  assert.equal(pubKey.length, 64);
  return keccak256Hash(pubKey).slice(-20);
}


const rhoBlakeHash = data => blake2b256Hash(RHOCore.toByteArray(RHOCore.fromJSData(data)));
const rhoKeccakHash = data => keccak256Hash(RHOCore.toByteArray(RHOCore.fromJSData(data)));
const sigDERHex = sigObj => b2h(secp256k1.signatureExport(sigObj.signature));

async function claimAccount(label, priceInfo, { keyStore, toolsMod, getpass, rnode, clock }) {
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
  } catch (err) {
    throw new ExitStatus(`cannot load public key: ${err.message}`);
  }

  function fixArgs(args, [statusOut]) {
    console.log({ args, statusOut });
    const out = [...args];
    out[2] = sigDERHex(secp256k1.sign(rhoKeccakHash([b2h(pubKey), statusOut]), privKey));
    return out;
  }
  const tools = makeProxy(toolsMod.URI, priceInfo, { rnode, clock, fixArgs, predeclare: ['s'] });
  const pk = await outcome(tools.claim(ethAddr, b2h(pubKey), 'sig goes here'));

  console.log({ ethAddr, pk });
}


async function getBalance(label, priceInfo, { keyStore, toolsMod, getpass, rnode, clock }) {
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
  } catch (err) {
    throw new ExitStatus(`cannot load key: ${err.message}`);
  }

  const tools = makeProxy(toolsMod.URI, priceInfo, { rnode, clock });
  const edPubKey = Buffer.from(h2b(keyPair(privKey).publicKey()));
  const balance = await outcome(tools.getBalance(new URL(rhoid.pkURI(edPubKey))));

  console.log({ ethAddr, balance, label });
}

async function publish(label, isClaimed, priceInfo, { keyStore, toolsMod, rnode, clock, getpass }) {
  const privKey = await loadKey(keyStore, label, [], { getpass });
  const secPubKey = privateToPublic(privKey); // eth style secp256k1
  const ethAddr = `0x${b2h(pubToAddress(secPubKey))}`;
  const edkey = keyPair(privKey); // ed25519 per nacl

  const nonce = clock().valueOf(); // ISSUE: cli arg? persist?

  const tools = makeProxy(toolsMod.URI, priceInfo, { rnode, clock });

  let uri;
  if (isClaimed) {
    const toSign = await outcome(tools.prepareToPublish(b2h(secPubKey), nonce));
    const sig = edkey.signBytes(toSign);

    uri = await outcome(tools.publishClaimed(b2h(secPubKey), h2b(edkey.publicKey()), sig, nonce));
  } else {
    const created = await outcome(tools.createWallet('secp256k1', b2h(secPubKey), nonce));
    if (!created.toSign) { throw new Error('expected toSign'); }
    if (!created.uri) { throw new Error('expected uri'); }
    const sig = edkey.signBytes(created.toSign);
    // ISSUE: try WalletCheck access 1st to avoid clobbering.
    // ISSUE: check target URI to avoid clobbering
    uri = await outcome(tools.publishRegistered(
      created.uri, h2b(edkey.publicKey()), sig, nonce,
    ));
  }
  console.log({ uri: String(uri), ethAddr, label });
}


async function sendPayment(
  // ISSUE: paymentInfo confuses phloPrice and such with the REV we're sending here.
  amount, fromLabel, toAddr, paymentInfo,
  { keyStore, toolsMod, getpass, rnode, clock },
) {
  const notice = [[`send ${String(amount)} from ${fromLabel} to ${String(toAddr)}`]];
  const privKey = await loadKey(keyStore, fromLabel, notice, { getpass });

  // registry insertSigned uses ed25519 even though this wallet uses secp256k1 signatures.
  const edPubKey = Buffer.from(h2b(keyPair(privKey).publicKey()));
  const fromAddr = new URL(rhoid.pkURI(edPubKey));

  const myWallet = makeProxy(fromAddr, paymentInfo, { rnode, clock, insertSigned: true });
  const oldNonce = await myWallet.getNonce();
  if (typeof oldNonce !== 'number') { throw new Error('expected number'); }
  const nonce = oldNonce + 1;

  function fixArgs(args, [dest, ..._]) {
    const out = [...args];
    out[4] = sigDERHex(secp256k1.sign(rhoBlakeHash([nonce, amount, dest]), privKey));
    return out;
  }
  const tools = makeProxy(toolsMod.URI, paymentInfo, { rnode, clock, fixArgs, predeclare: ['via'] });

  return outcome(tools.pay(fromAddr, toAddr, amount, nonce, 'sig goes here'));
}


/*::
type WebSendResult<T> = { "=": T } | { "!": string }
 */

// waterken JSON convensions http://waterken.sourceforge.net/web_send/
async function outcome/*::<T>*/(x /*:Promise<mixed>*/) /*: Promise<T>*/ {
  let o;
  try {
    o = await x;
  } catch (err) {
    throw new ExitStatus(`out of phlogistons? ${err.message}`);
  }
  if (o === null || typeof o !== 'object') { throw new Error('bad reply'); }
  if ('!' in o) { throw new ExitStatus(o['!']); }
  // $FlowFixMe validate mixed -> T
  return o['='];
}

async function ensureLoaded(name, src, { registry }) /*: ModuleInfo */ {
  const srcHash = simplifiedKeccak256Hash(src);
  const mods = await registry.get(srcHash);
  const mod = mods[srcHash];
  if (!mod) { throw new ExitStatus(`rholang module not loaded: ${name}`); }
  // $FlowFixMe validate mixed -> ModuleInfo
  return mod;
}


if (require.main === module) {
  // Import primitive effects only when invoked as main module.
  /* eslint-disable global-require */
  /*global process*/
  main(
    process.argv,
    {
      stdin: process.stdin,
      stdout: process.stdout,
      readFile: require('fs').readFile,
      writeFile: require('fs').writeFile,
      join: require('path').join,
    },
    {
      clock: () => new Date(),
      randomBytes: require('crypto').randomBytes,
    },
    {
      grpc: require('grpc'),
      uuidv4: require('uuid/v4'),
    },
  )
    .catch((err) => {
      if (err instanceof ExitStatus) {
        console.error(err.message);
        process.exit(1);
      } else {
        throw err; // bug!
      }
    });
}
