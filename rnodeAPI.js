/** rnodeAPI -- RChain node Casper gRPC API endpoints

You can run `integrationTest()` a la `node rnodeAPI.js`.

refs:
  - [CasperMessage.proto][1] and RhoTypes.proto.
  - [gRPC in node.js][2]

[1]: https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/CasperMessage.proto
[2]: https://grpc.io/docs/tutorials/basic/node.html

 */

const assert = require('assert');

const def = obj => Object.freeze(obj); // cf. ocap design note
// ISSUE: how to import strings? TODO: process .proto statically
const protoSrc = __dirname + '/protobuf/CasperMessage.proto'; // eslint-disable-line

/**
 * Connect to an RChain node (RNode).
 *
 * @param grpc access to the network: grpc instance from the node grpc package
 * @param endpoint { host, port } of rnode gRPC service
 * @return a thin wrapper around a gRPC client stub
 */
module.exports.RNode = RNode;
function RNode(grpc, endPoint) {
  const { host, port } = endPoint;
  assert.ok(host, 'endPoint.host missing');
  assert.ok(port, 'endPoint.port missing');

  const proto = grpc.load(protoSrc);
  const casper = proto.coop.rchain.casper.protocol;

  const client = new casper.DeployService(
    `${host}:${port}`, grpc.credentials.createInsecure(), // ISSUE: let caller do secure?
  );

  /**
   * Deploys a rholang term to a node
   * @param deployData a DeployData (cf CasperMessage.proto)
   * @param deployData.term A string of rholang code (for example @"world"!("Hello!")  )
   * @param deployData.purseAddress where deployment price is paid from
   * @param deployData.timestamp millisecond timestamp
   *        e.g. new Date().valueOf()
   * @param deployData.nonce
   * @param deployData.phloLimit
   * @param deployData.phloPrice
   * UNTESTED:
   * @param sig signature of (hash(term) + timestamp) using private key
   * @param deployData.sigAlgorithm name of the algorithm used to sign
   * @return A promise for a DeployServiceResponse
   */
  function doDeploy(deployData) {
    // See also
    // casper/src/main/scala/coop/rchain/casper/util/comm/DeployRuntime.scala#L38
    // d        = DeployString().withTimestamp(timestamp).withTerm(code)
    return send(next => client.DoDeploy(deployData, next));
  }

  /**
   * Creates a block on your node
   * @return A promise for DeployServiceResponse
   */
  function createBlock() {
    return send(next => client.createBlock({}, next));
  }

  /**
   * Adds block to local DAG and gossips block to peers on network
   * @param block The block to be added
   * @return A promise for a google.protobuf.Empty
   */
  function addBlock(block) {
    // ISSUE: Error: Illegal value for Message.Field ...
    // .Expr.g_bool of type bool: object
    // (proto3 field without field presence cannot be null)
    // https://gist.github.com/dckc/e60f22866aa47938bcd06e39be351aea
    return send(then => client.addBlock(block, then));
  }

  /**
   * Listen for data at a name in the RChain tuple-space.
   *
   * @param nameObj: JSON-ish data: string, number, {}, [], ...
   * @return: promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtName(nameObj) {
    const chan = { quote: fromJSData(nameObj) };
    return send(then => client.listenForDataAtName(chan, then))
      .then((response) => {
        if (response.status !== 'Success') {
          throw new Error(response);
        }
        // ISSUE: make use of int32 length = 3;?
        return response.blockResults;
      });
  }

  /**
   * Turns a rholang term into a byte-array compatible with Rholang
   * @param termObj a rholang term object
   * @return The byte-array
   */
  function toByteArray(termObj) {
    // note: if we forget new here, we get:
    // TypeError: this.$set is not a function
    const term = new proto.Par(termObj);

    const buf = term.toBuffer();
    return buf;
  }

  return def({
    doDeploy, createBlock, addBlock, listenForDataAtName, toByteArray,
  });
}


const RHOCore = def({
  toJSData,
  fromJSData,
  toRholang,
});
module.exports.RHOCore = RHOCore;

/**
 * "we can detail a direct representation of JSON into a
 * fragment of the rholang syntax referred to in the diagram
 * below as RHOCore." -- [Mobile process calculi for programming the blockchain[1]
 *
 * [1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst
 * @param x Any javascript object to be serialized to RHOCore
 * @return A rholang term representing the object in RHOCore form.
 */
function fromJSData(data) {
  const expr1 = kv => fixLF({ exprs: [kv] });

  function recur(x) {
    switch (typeof x) {
      case 'boolean':
        return expr1({ g_bool: x, expr_instance: 'g_bool' });
      case 'number':
        // ISSUE: only integers
        return expr1({ g_int: x, expr_instance: 'g_int' });
      case 'string':
        return expr1({ g_string: x, expr_instance: 'g_string' });
      case 'object':
        if (x === null) {
          return fixLF({});
        }
        if (Array.isArray(x)) {
          return toArry(x);
        }
        return keysValues(x);
      default:
        throw new Error(`no mapping to RHOCore for ${typeof x}`);
    }
  }

  function toArry(items) {
    // [1, 2, 2] is a process with one exprs, which is a list
    // The list has one 3 items, each of which is a process
    // with one exprs, which is an int.
    return expr1({
      e_list_body: fixLF({ ps: items.map(recur) }),
      expr_instance: 'e_list_body',
    });
  }

  function keysValues(obj) {
    const sends = Object.keys(obj).sort().map((k) => {
      const chan = { quote: expr1({ g_string: k, expr_instance: 'g_string' }) };
      return fixLF({ chan, data: [recur(obj[k])] });
    });
    return fixLF({ sends });
  }

  return recur(data);
}

// this locallyFree: emptyBitSet stuff shouldn't be necessary; see
// https://rchain.atlassian.net/browse/RHOL-537
const bytesPerLong = 8;
const emptyBitSet = Buffer.from(Array(bytesPerLong).fill(0));
function fixLF(p) {
  return Object.assign({ locallyFree: emptyBitSet }, p);
}


/**
 * Converts an RHOCore object back to JavaScript data
 *
 * @param par A RHOCore representation of a Rholang term
 * @return JSON-serializable data
 */
function toJSData(par) {
  function recur(p) {
    if (p.exprs) {
      if (p.exprs.length !== 1) {
        throw new Error('not implemented');
      }
      const ex = p.exprs[0];
      if (ex.expr_instance === 'g_bool') {
        return ex.g_bool;
      }
      if (ex.expr_instance === 'g_int') {
        return ex.g_int;
      }
      if (ex.expr_instance === 'g_string') {
        return ex.g_string;
      }
      if (ex.expr_instance === 'e_list_body') {
        return ex.e_list_body.ps.map(recur);
      }
      throw new Error(`not RHOCore? ${ex}`);
    } else if (p.sends) {
      return p.sends.reduce(
        (acc, s) => ({ [recur(s.chan.quote)]: recur(s.data[0]), ...acc }),
        {},
      );
    } else {
      // TODO: check that everything else is empty
      return null;
    }
  }

  return recur(par);
}


/**
 * Converts an RHOCore object into Rholang source form
 *
 * @param par A RHOCore representation of a Rholang term
 * @return A rholang string
 */
function toRholang(par) {
  const src = x => JSON.stringify(x);

  function recur(p) {
    if (p.exprs) {
      if (p.exprs.length !== 1) {
        throw new Error('not implemented');
      }
      const ex = p.exprs[0];
      if (ex.expr_instance === 'g_bool') {
        return src(ex.g_bool);
      }
      if (ex.expr_instance === 'g_int') {
        return src(ex.g_int);
      }
      if (ex.expr_instance === 'g_string') {
        return src(ex.g_string);
      }
      if (ex.expr_instance === 'e_list_body') {
        const items = ex.e_list_body.ps.map(recur).join(', ');
        return `[${items}]`;
      }
      throw new Error(`not RHOCore? ${ex}`);
    } else if (p.sends) {
      const ea = s => `@${recur(s.chan.quote)}!(${s.data.map(recur).join(', ')})`;
      return p.sends.map(ea).join(' | ');
    } else {
      // TODO: check that everything else is empty
      return 'Nil';
    }
  }

  return recur(par);
}


/**
 * Adapt callback-style API using Promises.
 *
 * Instead of obj.method(...arg, callback),
 * use send(cb => obj.method(...arg, cb)) and get a promise.
 *
 * @param calling: a function of the form (cb) => o.m(..., cb)
 * @return A promise for the result passed to cb
 */
function send(calling) {
  function executor(resolve, reject) {
    const callback = (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    };

    calling(callback);
  }

  return new Promise(executor);
}


/**
 * log with JSON replacer: stringify Buffer data as hex
 */
module.exports.logged = logged;
function logged(obj, label) {
  console.log(label, JSON.stringify(obj, bufAsHex, 2));
  return obj;
}
function bufAsHex(prop, val) {
  if (prop === 'data' && 'type' in this && this.type === 'Buffer') {
    return Buffer.from(val).toString('hex');
  }
  return val;
}


/**
 *
 */
function integrationTest(argv, { grpc, clock }) {
  const [host, port] = [argv[2], parseInt(argv[3], 10)];

  const stuffToSign = { x: 'abc' };

  const ca = RNode(grpc, { host, port });

  friendUpdatesStory(ca);

  logged(ca.toByteArray(fromJSData(stuffToSign)), 'stuffToSign serialized');

  // const rhoTerm = 'contract @"certifyPeer"(peer, level) = { peer!(*level) }';
  const rhoTerm = '@"world"!("hello!")';
  ca.doDeploy({
    term: rhoTerm,
    timestamp: clock().valueOf(),
    // from: '0x1',
    // nonce: 0,
  }).then((result) => {
    console.log('doDeploy result:', result);

    if (!result.success) {
      throw result;
    }

    return ca.createBlock();
  }).catch((oops) => {
    console.log('deploy, propose failed:', oops);
  });
}


function friendUpdatesStory(rchain) {
  rchain.listenForDataAtName('aliceUpdates')
    .then((blockResults) => {
      blockResults.forEach((b) => {
        b.postBlockData.forEach((d) => {
          logged(RHOCoresrc(d), 'Alice said');
        });
      });
    })
    .catch((oops) => {
      console.log({ oops });
    });
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  if (process.argv.length === 4) {
    integrationTest(
      process.argv,
      {
        grpc: require('grpc'),
        clock: () => new Date(),
      },
    );
  } else {
    process.stderr.write('usage: node rnodeAPI.js <host> <port>\n');
    process.exit(1);
  }
}
