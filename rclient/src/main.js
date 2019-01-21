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
  RNode, RHOCore, simplifiedKeccak256Hash, h2b, b2h, sendCall,
  keccak256Hash, keyPair, makeProxy, blake2b256Hash,
} = require('rchain-api');

const { rhol } = RHOCore;
const { GPrivate } = require('../../protobuf/RhoTypes.js');

const { loadRhoModules, prettyPrivate } = require('../../src/loading'); // ISSUE: path?
const { fsReadAccess, fsWriteAccess, FileStorage } = require('./pathlib');
const { asPromise } = require('./asPromise');
const secretStorage = require('./secretStorage');
const { link } = require('./assets');
const rhoid = require('./rhoid');

const usage = `

Usage:
  rclient [options] account --new LABEL
  rclient [options] account --import LABEL JSONFILE
  rclient [options] account --show-public LABEL
  rclient [options] account --claim LABEL
  rclient [options] account --get-balance LABEL
  rclient [options] account --publish LABEL
  rclient [options] pay --from=LABEL --to=URI AMOUNT
  rclient [options] sign LABEL [ --json ] DATAFILE
  rclient [options] deploy RHOLANG
  rclient [options] register RHOMODULE...

Options:
 account                account management
                        (ISSUE: "account" is a mis-nomer?
                         change to id? or locker?)
 --new                  generate new secret key
                        and associate with LABEL in keystore
 --keystore=FILE        [default: keystore.json]
 --import               import from JSONFILE as LABEL
                        (per ethereum Web3 Secret Storage)
 --show-public          show public key and ethereum-style address
                        after decrypting with password
 --claim                claim REV balance from RHOC after genesis
 --get-balance          get REV balance after claiming it
 --publish              insert wallet in public registry
                        (ISSUE: more clear docs)
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


function main(
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
  } else if (cli.account && cli['--publish']) {
    publish(cli.LABEL, priceInfo(), { keyStore: argWr('--keystore'), getpass, rnode, clock });
  } else if (cli.pay) {
    sendPayment(argInt('AMOUNT'), cli['--from'], new URL(cli['--to']), priceInfo(), {
      getpass,
      rnode,
      clock,
      keyStore: argWr('--keystore'),
      registry: FileStorage(argWr('--registry')),
    });
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


async function register(files, registry, _price, { rnode, clock }) {
  // ISSUE: what to do when we restart the node?
  // how to check that we're talking to the same chain?
  async function check1(file) {
    const src = await file.readText();

    const srcHash = simplifiedKeccak256Hash(src);
    console.log('checking', file.name());
    const mods = await registry.get(srcHash);
    return { file, src, srcHash, mod: mods[srcHash] };
  }

  const status = await Promise.all(files.map(check1));
  const toLoad = status.filter(({ mod }) => !mod);
  console.log('loading:', toLoad.map(({ file }) => file.name()));
  if (toLoad.length > 0) {
    const loaded = await loadRhoModules(toLoad.map(({ src }) => src), user, { rnode, clock });
    registry.set(collect(loaded.map((m, ix) => [toLoad[ix].srcHash, m])));
  }
}

function collect(props /*: [string, ModuleInfo][]*/) /*{ [string]: ModuleInfo } */{
  return props.reduce((acc, [s, m]) => ({ ...acc, [s]: m }), {});
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


async function showPublic(keyStore, label, { getpass }) {
  try {
    const privKey = await loadKey(keyStore, label, [], { getpass });
    // ISSUE: logging is not just FYI here;
    // should be passed as an explicit capability.
    const pubKey = privateToPublic(privKey);
    const ethAddr = `0x${b2h(pubToAddress(pubKey))}`;
    console.log({ label, publicKey: b2h(pubKey), ethAddr });
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

  // ISSUE: refactor to use fixArgs to avoid round trip for previewPrivateIds
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


function RNode2({ rnode }) {
  // ISSUE: push run() down into the API somewhere?
  async function run(deployInfo, timestamp, term) {
    console.log('run:', { timestamp });
    const [returnChan] = await rnode.previewPrivateChannels({ timestamp, user }, 1);
    console.log({ returnChan: prettyPrivate(returnChan) });
    console.log(term);
    await rnode.doDeploy({ ...deployInfo, timestamp, user, term }, true);
    const blockResults = await rnode.listenForDataAtName(returnChan);
    if (!(blockResults.length > 0)) { throw new Error('no data at return channel'); }
    const answerPar = blockResults[0].postBlockData[0];
    // console.log('answerPar', JSON.stringify(answerPar, null, 2));
    return RHOCore.toJSData(answerPar);
  }

  return Object.freeze({ run });
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

  const rnode2 = RNode2({ rnode }); // ISSUE: add to rnodeAPI.js?

  const balance = await rnode2.run(priceInfo, clock().valueOf(), rhol`
  new return, wCh, rlCh,
  trace(\`rho:io:stderr\`), lookup(\`rho:registry:lookup\`) in {
    trace!({"getBalance": *return, "trace": *trace}) |
    lookup!(${WalletCheck}, *rlCh) | for (@(_, *WalletCheck) <- rlCh) {
      WalletCheck!("access", ${b2h(pubKey)}, *wCh) | for(@(ok, *maybeWallet) <- wCh) {
        if(ok) { maybeWallet!("getBalance", *return) }
        else{ trace!({"problem": *maybeWallet}) | return!(Nil) }
      }
    }
  }`);
  console.log({ balance });
}

async function publish(label, priceInfo, { keyStore, rnode, clock, getpass }) {
  const privKey = await loadKey(keyStore, label, [], { getpass });
  const pubKey = privateToPublic(privKey); // eth style secp256k1

  const nonce = clock().valueOf(); // ISSUE: cli arg? persist?

  const rnode2 = RNode2({ rnode }); // ISSUE: add to rnodeAPI.js?

  const toSign = await rnode2.run(priceInfo, clock().valueOf(), rhol`
  new return, rlCh, wCh,
  trace(\`rho:io:stderr\`), lookup(\`rho:registry:lookup\`)
  in {
    trace!({"publish pt1": *return}) |
    lookup!(${WalletCheck}, *rlCh) | for (@(_, *WalletCheck) <- rlCh) {
      WalletCheck!("access", ${b2h(pubKey)}, *wCh) | for(@(ok, *maybeWallet) <- wCh) {
        if(ok) { return!((${nonce}, *maybeWallet).toByteArray()) }
        else { trace!({"problem": *maybeWallet}) | return!(Nil) }
      }
    }
  }`);
  if (toSign === null) { throw new Error(`no such wallet: ${b2h(pubKey)}`); }
  if (!(toSign instanceof Uint8Array)) { throw new Error('expected ByteArray'); }
  console.log({ toSign: Buffer.from(toSign).toString('hex') });

  const edkey = keyPair(privKey); // ed25519 per nacl
  const sig = edkey.signBytes(toSign);

  // ISSUE: move rholang code to .rho file
  const uri = await rnode2.run(priceInfo, clock().valueOf(), rhol`
  new return, trace(\`rho:io:stderr\`), rlCh, wCh,
  insertSigned(\`rho:registry:insertSigned:ed25519\`), lookup(\`rho:registry:lookup\`)  in {
    trace!({"publish pt2": *return}) |
    lookup!(${WalletCheck}, *rlCh) | for (@(_, *WalletCheck) <- rlCh) {
      WalletCheck!("access", ${b2h(pubKey)}, *wCh) | for(@(ok, *maybeWallet) <- wCh) {
        trace!({"access ok?": ok, "maybeWallet": *maybeWallet}) |
        if(ok) {
          trace!({"access": *maybeWallet}) |
          insertSigned!(${edkey.publicKey()}.hexToBytes(), (${nonce}, *maybeWallet), ${sig}, *return)
        } else { trace!({"problem": *maybeWallet}) | return!(Nil) }
      }
    }
  }`);
  console.log({ uri: String(uri) });
}


async function sendPayment(
  amount, fromLabel, toAddr, paymentInfo,
  { keyStore, registry, getpass, rnode, clock },
) {
  const toolsMod = await ensureLoaded('tools.rho', link('./tools.rho'), { registry });

  const notice = [[`send ${String(amount)} from ${fromLabel} to ${String(toAddr)}`]];
  const privKey = await loadKey(keyStore, fromLabel, notice, { getpass });

  // registry insertSigned uses ed25519 even though this wallet uses secp256k1 signatures.
  const edPubKey = Buffer.from(h2b(keyPair(privKey).publicKey()));
  const fromAddr = new URL(rhoid.pkURI(edPubKey));

  const myWallet = makeProxy(fromAddr, paymentInfo, { rnode, clock, insertSigned: true });
  const oldNonce = await myWallet.getNonce();
  console.log({ oldNonce });
  if (typeof oldNonce !== 'number') { throw new Error('expected number'); }
  const nonce = oldNonce + 1;

  const predeclare = ['viaPurse'];
  const rhoHash = data => blake2b256Hash(RHOCore.toByteArray(RHOCore.fromJSData(data)));
  const sigArgs = dest => secp256k1.sign(rhoHash([nonce, amount, dest]), privKey);
  const sigFmt = sigObj => b2h(secp256k1.signatureExport(sigObj.signature));
  function fixArgs(args, chanArgs) {
    const [dest] = chanArgs;
    const out = [...args];
    out[4] = sigFmt(sigArgs(dest));
    return out;
  }

  const tools = makeProxy(toolsMod.URI, paymentInfo, { rnode, clock, fixArgs, predeclare });
  const reply = await tools.pay(fromAddr, toAddr, amount, nonce, 'sig goes here');
  return outcome(reply);
}


/*::
type WebSendResult<T> = { "=": T } | { "!": string }
 */

// waterken JSON convensions http://waterken.sourceforge.net/web_send/
async function outcome/*::<T>*/(x /*:Promise<mixed>*/) /*: Promise<T>*/ {
  const o = await x;
  if (o === null || typeof o !== 'object') { throw new Error('bad reply'); }
  if ('!' in o) { throw new Error(o['!']); }
  // $FlowFixMe validate mixed -> T
  return o['='];
}

async function ensureLoaded(name, src, { registry }) /*: ModuleInfo */ {
  const srcHash = simplifiedKeccak256Hash(src);
  const mods = await registry.get(srcHash);
  const mod = mods[srcHash];
  if (!mod) { throw new Error(`rholang module not loaded: ${name}`); }
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
  );
}
