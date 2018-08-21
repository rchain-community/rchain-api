/** rnodeAPI -- RChain node Casper gRPC API endpoints

We create Capper persistent objects for rnode endpoints.

You can run `integrationTest()` a la `node rnodeAPI.js`.

refs:
  - [CasperMessage.proto][1] and RhoTypes.proto.
  - [gRPC in node.js][2]

[1]: https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/CasperMessage.proto
[2]: https://grpc.io/docs/tutorials/basic/node.html

 */

const def = obj => Object.freeze(obj); // cf. ocap design note
// ISSUE: how to import strings? TODO: process .proto statically
const protoSrc = __dirname + '/protobuf/CasperMessage.proto'; // eslint-disable-line

/**
 * TODO @dckc, I'm not clear why we need all of clientFactory, casperClient, and theClient
 * @param grpc grpc instance from the node grpc package
 */
module.exports.clientFactory = clientFactory;
function clientFactory({ grpc }) {
  const proto = grpc.load(protoSrc);
  const casper = proto.coop.rchain.casper.protocol;

  /**
   * Generates an immutable casperClient object listening on the given endpoint
   * @param endpoint { host, port } of gRPC server
   * @return An immutable casperClient object
   */
  function casperClient(endPoint) {
    const { host, port } = endPoint;
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
      doDeploy, createBlock, addBlock, toByteArray,
    });
  }
  return def({ casperClient });
}


const RSON = def({
  fromData: toRSON,
  stringify: RSONsrc,
});
module.exports.RSON = RSON;

/**
 * "we can detail a direct representation of JSON into a
 * fragment of the rholang syntax referred to in the diagram
 * below as RHOCore." -- [Mobile process calculi for programming the blockchain[1]
 *
 * [1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst
 * @param x Any javascript object to be serialized to RSON
 * @return A rholang term representing the object in RSON form.
 */
// this locallyFree: emptyBitSet stuff shouldn't be necessary; see
// https://rchain.atlassian.net/browse/RHOL-537
const bytesPerLong = 8;
const emptyBitSet = Buffer.from(Array(bytesPerLong).fill(0));
function toRSON(data) {
  const fixLF = p => Object.assign({ locallyFree: emptyBitSet }, p);

  const expr1 = kv => fixLF({ exprs: [kv] });

  function recur(x) {
    switch (typeof x) {
      case 'boolean':
        return expr1({ g_bool: x });
      case 'number':
        // ISSUE: only integers
        return expr1({ g_int: x });
      case 'string':
        return expr1({ g_string: x });
      case 'object':
        if (x === null) {
          return fixLF({});
        }
        if (Array.isArray(x)) {
          return toArry(x);
        }
        return keysValues(x);
      default:
        throw new Error(`no mapping to RSON for ${typeof x}`);
    }
  }

  function toArry(items) {
    // [1, 2, 2] is a process with one exprs, which is a list
    // The list has one 3 items, each of which is a process
    // with one exprs, which is an int.
    return expr1({ e_list_body: fixLF({ ps: items.map(recur) }) });
  }

  function keysValues(obj) {
    const sends = Object.keys(obj).sort().map((k) => {
      const chan = { quote: expr1({ g_string: k }) };
      return fixLF({ chan, data: [recur(obj[k])] });
    });
    return fixLF({ sends });
  }

  return recur(data);
}

/**
 * Converts an RSON object into a JSON string
 * Opposite of toRSON
 * @param par A rholang term representing the object.
 * @return A JSON string
 */
function RSONsrc(par) {
  const src = x => JSON.stringify(x);

  function recur(p) {
    if (p.exprs) {
      if (p.exprs.length !== 1) {
        throw new Error('not implemented');
      }
      const ex = p.exprs[0];
      if ('g_bool' in ex) {
        return src(ex.g_bool);
      }
      if ('g_int' in ex) {
        return src(ex.g_int);
      }
      if ('g_string' in ex) {
        return src(ex.g_string);
      }
      if ('e_list_body' in ex) {
        const items = ex.e_list_body.ps.map(recur).join(', ');
        return `[${items}]`;
      }
      throw new Error(`not RSON? ${ex}`);
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
  if (argv.length < 4) {
    throw new Error('usage: node SCRIPT host port');
  }
  const [host, port] = [argv[2], parseInt(argv[3], 10)];

  const stuffToSign = { x: 'abc' };

  const maker = clientFactory({ grpc });
  const ca = maker.casperClient({ host, port });

  logged(ca.toByteArray(toRSON(stuffToSign)), 'stuffToSign serialized');

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
    throw new Error('usage: node rnodeAPI.js <host> <port>');
  }
}
