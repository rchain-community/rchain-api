/* global require */

const { RNode, h2b, RHOCore } = require('..');
const { link } = require('./assets');

const { toJSData } = RHOCore;

// ISSUE: I symlink'd these.
const walletContracts = {
  nonNegativeNumber: {
    term: link('./NonNegativeNumber.rho'),
    pk: 'd89a1e6d2b8f53595b3d0d47effd48f0e537d19d847ad5811cf5216157a3a63c',
    timestamp: 1539963224985,
  },
  mint: {
    term: link('./MakeMint.rho'),
    pk: 'd9ba2075d355755060205605f4cdbd5ecd3cce5ed1f39690f34772f7c9aa30ab',
    timestamp: 1539969637029,
  },
  wallet: {
    term: link('./BasicWallet.rho'),
    pk: 'd72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236',
    timestamp: 1540214070797,
  }
};

const defaultPayment = { from: '0x1', nonce: 0, phloPrice: 1, phloLimit: 100000 };

async function deployWalletContracts({ rnode, clock, setTimeout }) {

  async function register1(info) {
    // const timestamp = clock.valueOf();
    const deploy1 = {
      term: info.term, timestamp: info.timestamp, user: h2b(info.pk),
      ...defaultPayment,
    };
    // convention:
    // new
    //   BasicWallet, rs(`rho:registry:insertSigned:ed25519`), uriOut
    const [_, uriOut] = await rnode.previewPrivateChannels(deploy1, 2);
    console.log('uriOut:', uriOut);
    await rnode.doDeploy(deploy1, true);
    await makeTimer(setTimeout)(250);
    const found = await rnode.listenForDataAtName(uriOut);
    const target = firstBlockData(found).exprs[0].g_uri;
    console.log({ target });
    return target;
  }

  console.log('nn');
  const nonNegativeNumber = await register1(walletContracts.nonNegativeNumber);
  console.log('mint');
  const mint = await register1(walletContracts.mint);
  console.log('wallet');
  const wallet = await register1(walletContracts.wallet);
  return { nonNegativeNumber, mint, wallet };
}

async function alicePaysBob() {
}

// Get the first piece of data from listenForDataAtName
function firstBlockData(blockResults) {
  // console.log('found:', JSON.stringify(blockResults, null, 2));
  const ea = [].concat(...blockResults.map(br => br.postBlockData));
  console.log({ ea });
  const good = ea.filter(par => par.exprs.length > 0);
  console.log({ good });
  return good[0];
}

function makeTimer(setTimeout) {
  return function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
}


/*global module, setTimeout */
if (require.main === module) {
  /* global process */
  /* eslint-disable global-require */
  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };
  const rnode = RNode(require('grpc'), endpoint);

  try {
    deployWalletContracts({
      rnode,
      setTimeout,
      clock: () => new Date().valueOf(),
    });
  } catch (oops) {
    console.error(oops);
    process.exit(1);
  }
}
