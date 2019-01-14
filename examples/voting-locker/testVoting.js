/* global require */

const { URL } = require('url');

const { RNode, makeProxy, h2b, keyPair } = require('../..');

const { link } = require('./assets');
const { loadRhoModules } = require('../../src/loading');

const defaultPayment = { from: '0x1', nonce: 0, phloPrice: 1, phloLimit: 100000 };
const defaultDeployInfo = { term: '', sig: h2b(''), sigAlgorithm: 'ed25519', timestamp: 0, ...defaultPayment };
const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary

const Scenario = {
  choices: ['Lincoln', 'Douglas'], // ISSUE: set vs list in JSON / RSON
  chair: {
    nickname: 'Chip the chair',
    keyPair: keyPair(h2b('9217509f61d80a69627daad29796774d1b65d06e70762aa114e9aa534c0d76bb')),
  },
  voter: {
    nickname: 'Vick the voter',
    keyPair: keyPair(h2b('f6664a95992958bbfeb7e6f50bbca2aa7bfd015aec79820caf362a3c874e9247')),
    choice: 'Lincoln',
  },
};


async function test({ rnode, clock }) {
  const [
    BallotMod, LockerMod,
    chairRoleMod, voterRoleMod,
  ] = await loadRhoModules([
    link('./voting.rho'), link('./locker.rho'),
    link('./chairRole.rho'), link('./voterRole.rho'),
  ], user, { rnode, clock });

  const chairRole = makeProxy(chairRoleMod.URI, { user, ...defaultDeployInfo }, { rnode, clock });
  const voterRole = makeProxy(voterRoleMod.URI, { user, ...defaultDeployInfo }, { rnode, clock });

  // There's no data dependency between the following two calls, so we should
  // be able to do them concurrently, but our proxy mechanism expects replies
  // to be available on chain right away and isn't smart enough to wait around
  // for the voter to get its right to vote before exercising it.
  const chairLockerURI = await chairRole.makeLocker(
    Scenario.chair.nickname, h2b(Scenario.chair.keyPair.publicKey()), Scenario.choices,
    { Locker: LockerMod.URI, Ballot: BallotMod.URI },
  );
  if (!(chairLockerURI instanceof URL)) { throw new Error('expected URL'); }
  const vl /*: mixed */ = await voterRole.makeLocker(
    Scenario.voter.nickname, h2b(Scenario.voter.keyPair.publicKey()), LockerMod.URI,
  );
  if (!(vl && (typeof vl === 'object')
        && ('locker' in vl) && (vl.locker instanceof URL)
        && ('inbox' in vl) && (vl.inbox instanceof URL))) {
    throw new Error('expected { locker: URI, inbox: URI }');
  }
  const { locker, inbox } = vl;

  const chairLocker = makeProxy(chairLockerURI, { user, ...defaultDeployInfo }, { rnode, clock });
  const voterLocker = makeProxy(locker, { user, ...defaultDeployInfo }, { rnode, clock });

  function toySig(kpr) {
    const pkh = kpr.publicKey();
    return h2b(pkh + pkh);
  }

  // again, serialization due to proxy return limitations
  await chairLocker.giveRightToVote(
    toySig(Scenario.chair.keyPair), 0,
    inbox,
    'TODO: reject',
  );
  await voterLocker.voteFor(
    toySig(Scenario.voter.keyPair), 0,
    Scenario.voter.choice,
    'TODO: reject',
  );

  const outcome = await chairLocker.getWinner(
    toySig(Scenario.chair.keyPair), 1,
    'dummyArg', // ISSUE: more arities in locker
    'TODO: reject',
  );

  console.log(outcome);
}


/*global module */
if (require.main === module) {
  /* global process */
  /* eslint-disable global-require */
  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };
  const rnode = RNode(require('grpc'), endpoint);

  try {
    test({
      rnode,
      clock: () => new Date(),
    });
  } catch (oops) {
    console.error(oops);
    process.exit(1);
  }
}
