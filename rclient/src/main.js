#!/usr/bin/env node
/** rclient -- CLI interface to gRPC API
 */
// @flow
/*global require, module, Buffer */

const assert = require('assert');
const read = require('read');

const secp256k1 = require('secp256k1'); // ISSUE: push into rchain-api?
const { docopt } = require('docopt');
const {
  RNode, RHOCore, REV,
  RholangCrypto,
  Hex, Ed25519keyPair,
  RegistryProxy,
} = require('rchain-api');
const { loadRhoModules } = require('../../src/loading'); // ISSUE: path?

const { fsReadAccess, fsWriteAccess, FileStorage } = require('./pathlib');
const { asPromise } = require('./asPromise');
const secretStorage = require('./secretStorage');
const { link } = require('./assets');

const { SignDeployment, RevAddress } = REV;
const { keccak256Hash } = RholangCrypto;
const { makeProxy } = RegistryProxy;
const h2b = Hex.decode;
const b2h = Hex.encode;

const usage = `
Usage:
  rclient [options] keygen LABEL
  rclient [options] import LABEL JSONFILE
  rclient [options] info LABEL
  rclient [options] genVault LABEL AMOUNT
  rclient [options] balance LABEL
  rclient [options] transfer --from=LABEL --to=REVADDR AMOUNT
  rclient [options] sign LABEL [ --json ] DATAFILE
  rclient [options] deploy RHOLANG
  rclient [options] register LABEL RHOMODULE...

Options:
 keygen                 generate new secret key
                        and associate with LABEL in keystore
 --keystore=FILE        [default: keystore.json]
 import                 import key from JSONFILE as LABEL
                        (per ethereum Web3 Secret Storage)
 info                   show public key and ethereum-style address
                        after decrypting with password
 genVault               create a genesis vault (testnet only)
 claim                  claim REV balance from RHOC after genesis
 publish                register a wallet at the rhoid derived
                        from the key. If --claimed, get the wallet
                        from WalletCheck; else, create a new empty wallet.
 balance                get REV balance after publishing account
 --host NAME            The hostname or IPv4 address of the node
                        [default: localhost]
 --port INT             The tcp port of the nodes gRPC service
                        [default: 40401]
 --phlo-limit=N         how much are you willing to spend? [default: 1000000]
 --phlo-price=N         TODO docs [default: 1]
 deploy                 deploy RHOLANG file
 register               deploy RHOMODULE, register exported process,
                        and save URI in registry file
 --poll-interval=N      when listening for data after a call. in ms [default: 5000]
 --registry=FILE        where to store file / URI mappings
                        [default: registry.json]
 -v --verbose           Verbose logging
 -h --help              show usage

`;

/*::
import type { SecretStorageV3, AES128CTR, SCrypt } from './secretStorage';

import type { ModuleInfo } from '../../src/loading'; // ISSUE: path?

import type { HexStr, PublicKey } from 'rchain-api';
 */

function ExitStatus(message) {
  this.message = message;
}

async function main(
  argv,
  { stdin, stdout, writeFile, readFile, join },
  { clock, randomBytes, setTimeout },
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
  const mkPause = makeTimer(setTimeout);
  const dur = argInt('--poll-interval');
  const delay = i => mkPause(dur * i);

  function payWith(key) {
    return function payFor(d0) {
      return SignDeployment.sign(key, {
        ...d0,
        phloPrice: argInt('--phlo-price'),
        phloLimit: argInt('--phlo-limit'),
      });
    };
  }

  async function ioTools() {
    const registry = FileStorage(argWr('--registry'));
    const toolsMod = await ensureLoaded('tools.rho', link('./tools.rho'), { registry });
    return { getpass, rnode, clock, delay, toolsMod, registry, keyStore: argWr('--keystore') };
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
  } else if (cli.genVault) {
    const io = await ioTools();
    await genVault(cli.LABEL, argInt('AMOUNT'), payWith, io);
  } else if (cli.balance) {
    const io = await ioTools();
    await getBalance(cli.LABEL, payWith, io);
  } else if (cli.transfer) {
    const io = await ioTools();
    await transferPayment(argInt('AMOUNT'), cli['--from'], cli['--to'], payWith, io);
  } else if (cli.sign) {
    const input = { data: argRd('DATAFILE'), json: cli['--json'] };
    await signMessage(argWr('--keystore'), cli.LABEL, input, { getpass });
  } else if (cli.deploy) {
    await deploy(argRd('RHOLANG'), payWith, where, { rnode, clock })
      .catch((err) => { console.error(err); throw err; });
  } else if (cli.register) {
    const registry = FileStorage(argWr('--registry'));
    await register(
      cli.LABEL, cli.RHOMODULE.map(rd), payWith,
      { getpass, rnode, clock, delay, registry, keyStore: argWr('--keystore') },
    );
  }
}

function makeTimer(setTimeout) {
  return function timer(ms) {
    console.log(`making pause of ${ms} ms`);
    return new Promise(resolve => setTimeout(() => {
      console.log(`${ms} pause done`);
      resolve();
    }, ms));
  };
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


async function register(
  label, files, payWith,
  { registry, rnode, clock, delay, keyStore, getpass },
) {
  // ISSUE: what to do when we restart the node?
  // how to check that we're talking to the same chain?
  async function check1(file) {
    const src = await ioOrExit(file.readText());

    const srcHash = RHOCore.wrapHash(keccak256Hash)(src);
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
    const { signingKey } = await loadRevAddr(label, [], { keyStore, getpass });
    const loaded = await ioOrExit(
      loadRhoModules(toLoad.map(({ src }) => src), payWith(signingKey), { rnode, clock, delay }),
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
  const publicKey /*: HexStr<PublicKey> */= Ed25519keyPair(privKey).publicKey();
  const revAddr = RevAddress.fromPublicKey(h2b(publicKey)).toString();
  console.log({ label, revAddr, publicKey, keyStore: keyStore.readOnly().name(), status: 'saved' });
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
  const { revAddr, publicKey } = await loadRevAddr(label, [], { keyStore, getpass });
  console.log({ label, publicKey, revAddr });
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


async function loadRevAddr(label, notice, { keyStore, getpass }) {
  try {
    const privKey = await loadKey(keyStore, label, notice, { getpass });
    const edKey = Ed25519keyPair(privKey);
    const revAddr = RevAddress.fromPublicKey(h2b(edKey.publicKey())).toString();
    return { label, revAddr, signingKey: edKey, publicKey: edKey.publicKey() };
  } catch (err) {
    throw new ExitStatus(`cannot load public key: ${err.message}`);
  }
}

async function genVault(
  label, amount, payWith,
  { keyStore, getpass, toolsMod, rnode, clock, delay },
) {
  const { revAddr, signingKey, publicKey } = await loadRevAddr(label, [], { keyStore, getpass });

  const tools = makeProxy(
    toolsMod.URI, h2b(publicKey), payWith(signingKey),
    { rnode, clock, delay },
  );
  const result = await tools.genVault(revAddr, amount);
  if (result && typeof result === 'object' && typeof result.message === 'string') {
    throw new ExitStatus(`cannot generate vault: ${result.message}`);
  }
  console.log({ revAddr, label, amount, result });
}


async function getBalance(label, payWith, { keyStore, toolsMod, getpass, rnode, clock, delay }) {
  const { revAddr, publicKey, signingKey } = await loadRevAddr(label, [], { keyStore, getpass });

  const tools = makeProxy(
    toolsMod.URI, h2b(publicKey), payWith(signingKey),
    { rnode, clock, delay },
  );
  const balance = await tools.balance(revAddr);

  console.log({ revAddr, balance, label });
}

async function transferPayment(
  amount, fromLabel, toAddr, payWith,
  { keyStore, toolsMod, getpass, rnode, clock, delay },
) {
  const notice = [[`send ${String(amount)} from ${fromLabel} to ${String(toAddr)}`]];
  try {
    RevAddress.parse(toAddr);
  } catch (badAddr) {
    throw new ExitStatus(`bad destination address: ${badAddr.message}`);
  }

  const { revAddr, publicKey, signingKey } = await loadRevAddr(
    fromLabel, notice,
    { keyStore, getpass },
  );

  const tools = makeProxy(
    toolsMod.URI, h2b(publicKey), payWith(signingKey),
    { rnode, clock, delay },
  );

  const transferResult = await tools.transfer(revAddr, toAddr, amount);
  console.log({ transferResult });
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
  const srcHash = RHOCore.wrapHash(keccak256Hash)(src);
  const mods = await registry.get(srcHash);
  const mod = mods[srcHash];
  if (!mod) { throw new ExitStatus(`rholang module not loaded: ${name}`); }
  // $FlowFixMe validate mixed -> ModuleInfo
  return mod;
}


if (require.main === module) {
  // Import primitive effects only when invoked as main module.
  /* eslint-disable global-require */
  /*global process, setTimeout*/
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
      setTimeout,
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
        console.error(err);
        console.error(err.stack);
        throw err; // bug!
      }
    });
}
