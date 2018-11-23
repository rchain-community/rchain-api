/* global require, exports */
// @flow strict

const { URL } = require('url');

// ISSUE: generated code isn't annotated. $FlowFixMe
const { Par } = require('../protobuf/RhoTypes.js');


/**
 * Build Rholang expression from Javascript data.
 *
 * This is the inverse of `toJSData`.
 *
 * @param data: number, string, array, etc.; see toJSData for details.
 * @return: A rholang term in Protobuf's JSON representation,
 *          i.e. `IPar` derived from RhoTypes.proto.
 */
exports.fromJSData = fromJSData;
function fromJSData(data /*: mixed */) /* : IPar */ {
  function expr1(kv /*: IPar*/) { return { exprs: [kv] }; }

  function recur(x) /*: IPar */{
    if (x instanceof URL) {
      return expr1({ g_uri: x.href });
    }
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
          return {};
        }
        if (Array.isArray(x)) {
          return toArry(x);
        }
        return keysValues(x);
      default:
        throw new TypeError(`no mapping to RHOCore for ${typeof x}`);
    }
  }

  function toArry(items /*: JsonArray */) {
    // [1, 2, 2] is a process with one exprs, which is a list
    // The list has one 3 items, each of which is a process
    // with one exprs, which is an int.
    return expr1({ e_list_body: { ps: items.map(recur) } });
  }

  function keysValues(obj) /*: IPar */ {
    const sends /*: ISend[] */ = Object.keys(obj).sort().map((k) => {
      const chan /*: IPar */ = expr1({ g_string: k });
      return { chan, data: [recur(obj[k])] };
    });
    return { sends };
  }

  return recur(data);
}


/**
 * Serialize a rholang term from Protobuf JSON to bytes.
 *
 * This is compatible with `x.toByteArray()` in Rholang.
 */
exports.toByteArray = toByteArray;
function toByteArray(termObj /*: IPar */) /*: Uint8Array */ {
  // Par.verify(termObj);
  return Par.encode(termObj).finish();
}


/*:: // Get Javascript data represented by a a RHOCore object.

// "we can detail a direct representation of JSON into a
// fragment of the rholang syntax referred to in the diagram
// below as RHOCore." -- [Mobile process calculi for programming the blockchain[1]
//
// [1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst

// @param par: An extended RHOCore object in Protobuf JSON form.
//             RHOCore is a subset of Rholang defined in [1].
//             We extend it to include URIs.

// @return: Javascript data represented by `par`; that is:
//          Any data you might get from JSON.parse()
//          as well as URLs.
//          The flow type is given below:
export type JsonExt<T> =
    | JsonPrimitive<T>
    | JsonArray
    | JsonObject
    ;

export type JsonPrimitive<T> =
    | null
    | string
    | number
    | boolean
    | T
    ;

export type JsonExtArray<T> = Array<JsonExt<T>>;

export type JsonExtObject<T> = { [string]: JsonExt<T> };

 */
// ack: https://github.com/facebook/flow/issues/4825#issuecomment-414605109
exports.toJSData = toJSData;
function toJSData(par /*: IPar */) /*: JsonExt<URL> */{
  function recur(p /*: IPar */) {
    if (p.exprs && p.exprs.length > 0) {
      if (p.exprs.length > 1) {
        throw new Error(`${p.exprs.length} exprs not part of RHOCore`);
      }
      const ex = p.exprs[0];
      if (typeof ex.g_bool !== 'undefined') {
        return ex.g_bool;
      }
      if (typeof ex.g_int !== 'undefined') {
        return parseInt(ex.g_int, 10); // ISSUE: overflow
      }
      if (typeof ex.g_string !== 'undefined' && ex.g_string !== null) {
        return ex.g_string;
      }
      if (typeof ex.g_uri !== 'undefined' && ex.g_uri !== null) {
        return new URL(ex.g_uri);
      }
      if (typeof ex.e_list_body !== 'undefined' && ex.e_list_body !== null
          && Array.isArray(ex.e_list_body.ps)) {
        return ex.e_list_body.ps.map(recur);
      }
      if (typeof ex.e_map_body !== 'undefined' && ex.e_map_body !== null
          && Array.isArray(ex.e_map_body.kvs)) {
        const props = ex.e_map_body.kvs.map((kv) => {
          const key = recur(kv.key || {});
          if (typeof key !== 'string') {
            throw new Error(`not RHOCore? ${JSON.stringify(key)}`);
          }
          const val = recur(kv.value || {});
          return { k: key, v: val };
        });
        return props.reduce((acc, { k, v }) => ({ [k]: v, ...acc }), {});
      }
      throw new Error(`not RHOCore? ${JSON.stringify(ex)}`);
    } else if (p.sends) {
      const props = p.sends.map((s) => {
        const key = recur(s.chan || {});
        if (typeof key !== 'string') { throw new Error(`not RHOCore? ${JSON.stringify(key)}`); }
        const val = recur((s.data || [{}])[0]);
        return { k: key, v: val };
      });
      return props.reduce((acc, { k, v }) => ({ [k]: v, ...acc }), {});
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
 *
 * ISSUE: Use intersection types to constrain par param further than IPar?
 */
exports.toRholang = toRholang;
function toRholang(par /*: IPar */) /*: string */ {
  const src = x => JSON.stringify(x);

  function recur(p /*: IPar */) {
    if (p.exprs && p.exprs.length > 0) {
      if (p.exprs.length > 1) {
        throw new Error(`${p.exprs.length} exprs not part of RHOCore`);
      }
      const ex = p.exprs[0];
      if (typeof ex.g_bool !== 'undefined') {
        return src(ex.g_bool);
      }
      if (typeof ex.g_int !== 'undefined') {
        return src(ex.g_int);
      }
      if (typeof ex.g_string !== 'undefined' && ex.g_uri !== null) {
        return src(ex.g_string);
      }
      if (typeof ex.g_uri !== 'undefined' && ex.g_uri !== null) {
        const uri = ex.g_uri;
        if (uri.match(/`/g)) {
          throw new Error(`not implemented: URIs containing back-tick: ${uri}`);
        }
        return `\`${uri}\``;
      }
      if (typeof ex.e_list_body !== 'undefined' && ex.e_list_body !== null
          && Array.isArray(ex.e_list_body.ps)) {
        const items /*: string[] */= (ex.e_list_body.ps || []).map(recur);
        return `[${items.join(', ')}]`;
      }
      throw new Error(`not RHOCore? ${JSON.stringify(ex)}`);
    } else if (p.sends) {
      const ea = s => `@${recur(s.chan || {})}!(${(s.data || []).map(recur).join(', ')})`;
      return p.sends.map(ea).join(' | ');
    } else {
      // TODO: check that everything else is empty
      return 'Nil';
    }
  }

  return recur(par);
}


exports.rhol = rhol;
function rhol(template /*: string[] */, ...subs /*: Json[] */) {
  const encoded = subs.map(it => toRholang(fromJSData(it)));

  const out = [];
  template.forEach((part, ix) => {
    out.push(part);
    out.push(encoded[ix]);
  });

  return out.join('');
}
