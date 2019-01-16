/* global require, exports, Buffer */
// @flow strict

const { URL } = require('url');

// ISSUE: generated code isn't annotated. $FlowFixMe
const { Par, GPrivate } = require('../protobuf/RhoTypes.js');

// copied from signing.js to avoid circular imports
const b2h = bytes => Buffer.from(bytes).toString('hex');

exports.fromJSData = fromJSData;
/**
 * Build Rholang expression from Javascript data.
 *
 * This is the inverse of `toJSData`.
 *
 * @param data: number, string, array, etc.; see toJSData for details.
 * @return: A rholang term in Protobuf's JSON representation,
 *          i.e. `IPar` derived from RhoTypes.proto.
 * @memberof RHOCore
 */
function fromJSData(data /*: mixed */) /* : IPar */ {
  function expr1(kv /*: IPar*/) { return { exprs: [kv] }; }

  function recur(x) /*: IPar */{
    if (x instanceof URL) {
      return expr1({ g_uri: x.href });
    }
    if (x instanceof GPrivate) {
      return { ids: [x] };
    }
    if (x instanceof Uint8Array) {
      return expr1({ g_byte_array: Buffer.from(x) });
    }
    if (x instanceof Buffer) {
      return expr1({ g_byte_array: x });
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

  function toArry(items /*: mixed[] */) {
    // [1, 2, 2] is a process with one exprs, which is a list
    // The list has one 3 items, each of which is a process
    // with one exprs, which is an int.
    return expr1({ e_list_body: { ps: items.map(recur) } });
  }

  function keysValues(obj) /*: IPar */ {
    const kvs /*: ISend[] */ = Object.keys(obj).sort().map(
      k => ({ key: recur(k), value: recur(obj[k]) }),
    );
    return expr1({ e_map_body: { kvs } });
  }

  return recur(data);
}


exports.toByteArray = toByteArray;
/**
 * Turns a rholang term into a byte-array compatible with Rholang
 * @memberof RHOCore
 */
function toByteArray(termObj /*: IPar */) /*: Uint8Array */ {
  // Par.verify(termObj);
  return Par.encode(termObj).finish();
}


/*::

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
    | JsonExtArray<T>
    | JsonExtObject<T>
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
/**
 * Converts an RHOCore object back to JavaScript data
 *
 * @memberof RHOCore
 * @param par A RHOCore representation of a Rholang term
 * @return JSON-serializable data
 */
function toJSData(par /*: IPar */) /*: JsonExt<URL | GPrivate> */{
  function recur(p /*: IPar */) /*: JsonExt<URL | GPrivate> */{
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
      if (typeof ex.g_byte_array !== 'undefined' && ex.g_string !== null) {
        return ex.g_byte_array;
      }
      if (typeof ex.g_uri !== 'undefined' && ex.g_uri !== null) {
        return new URL(ex.g_uri);
      }
      if (typeof ex.e_list_body !== 'undefined' && ex.e_list_body !== null
          && Array.isArray(ex.e_list_body.ps)) {
        return ex.e_list_body.ps.map(recur);
      }
      // interpret tuple as list. IOU tests.
      if (typeof ex.e_tuple_body !== 'undefined' && ex.e_tuple_body !== null
          && Array.isArray(ex.e_tuple_body.ps)) {
        return ex.e_tuple_body.ps.map(recur);
      }
      if (typeof ex.e_map_body !== 'undefined' && ex.e_map_body !== null
          && Array.isArray(ex.e_map_body.kvs)) {
        const props = ex.e_map_body.kvs.map((kv) => {
          const key = recur(kv.key || {});
          if (typeof key !== 'string') {
            throw new Error(`not RHOCore? map key not string: ${JSON.stringify(key)}`);
          }
          const val = recur(kv.value || {});
          return { k: key, v: val };
        });
        return props.reduce((acc, { k, v }) => ({ [k]: v, ...acc }), {});
      }
      throw new Error(`not RHOCore? unknown expression type: ${JSON.stringify(ex)}`);
    } else if (p.sends && p.sends.length) {
      const props = p.sends.map((s) => {
        const key = recur(s.chan || {});
        if (typeof key !== 'string') { throw new Error(`not RHOCore? send key: ${JSON.stringify(key)}`); }
        const val = recur((s.data || [{}])[0]);
        return { k: key, v: val };
      });
      return props.reduce((acc, { k, v }) => ({ [k]: v, ...acc }), {});
    } else if (p.ids && p.ids.length) {
      if (p.ids.length !== 1) {
        throw new Error(`not RHOCore? >1 ids ${JSON.stringify(p)}`);
      }
      return GPrivate.fromObject(p.ids[0]);
    } else {
      // TODO: check that everything else is empty
      return null;
    }
  }

  return recur(par);
}


exports.toRholang = toRholang;
/**
 * Converts an RHOCore object into Rholang source form
 *
 * @memberof RHOCore
 * @param par A RHOCore representation of a Rholang term
 * @return A rholang string
 *
 * ISSUE: Use intersection types to constrain par param further than IPar?
 */
function toRholang(par /*: IPar */) /*: string */ {
  const src = x => JSON.stringify(x);

  function recur(p /*: IPar */) {
    if (p.ids && p.ids.length) {
      throw new Error('Unforgeable names have no rholang syntax.');
    } else if (p.exprs && p.exprs.length > 0) {
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
      if (typeof ex.g_string !== 'undefined' && ex.g_string !== null) {
        return src(ex.g_string);
      }
      if (typeof ex.g_byte_array !== 'undefined' && ex.g_byte_array !== null) {
        return `"${b2h(ex.g_byte_array)}".hexToBytes()`;
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
      if (typeof ex.e_map_body !== 'undefined' && ex.e_map_body !== null
          && Array.isArray(ex.e_map_body.kvs)) {
        const properties = (ex.e_map_body.kvs || []).map(
          ({ key, value }) => `${recur(key || null)}: ${recur(value || null)}`,
        );
        return `{${properties.join(', ')}}`;
      }
      throw new Error(`not RHOCore? unknown expr ${JSON.stringify(ex)}`);
    } else if (p.sends && p.sends.length) {
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
/**
 * Template tag for RHOCore interpolation
 *
 * @memberof RHOCore
 */
function rhol(template /*: string[] */, ...subs /*: JsonExt<URL | GPrivate>[] */) {
  const encoded = subs.map(it => toRholang(fromJSData(it)));

  const out = [];
  template.forEach((part, ix) => {
    out.push(part);
    out.push(encoded[ix]);
  });

  return out.join('');
}
