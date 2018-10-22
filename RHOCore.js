// @flow strict

// ISSUE: generated code isn't annotated. $FlowFixMe
const { Par } = require('./protobuf/RhoTypes.js');

/**
 * "we can detail a direct representation of JSON into a
 * fragment of the rholang syntax referred to in the diagram
 * below as RHOCore." -- [Mobile process calculi for programming the blockchain[1]
 *
 * [1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst
 * @param x Any javascript object to be serialized to RHOCore
 * @return A rholang term representing the object in RHOCore form.
 */
exports.fromJSData = fromJSData;
function fromJSData(data /*: mixed */) /* : IPar */ {
  function expr1(kv /*: IPar*/) { return { exprs: [kv] }; }

  function recur(x) /*: IPar */{
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
 * Turns a rholang term into a byte-array compatible with Rholang
 */
exports.toByteArray = toByteArray;
function toByteArray(termObj /*: IPar */) /*: Uint8Array */ {
  // Par.verify(termObj);
  return Par.encode(termObj).finish();
}


/**
 * Converts an RHOCore object back to JavaScript data
 *
 * @param par A RHOCore representation of a Rholang term
 * @return JSON-serializable data
 */
exports.toJSData = toJSData;
function toJSData(par /*: IPar */) /*: Json */{
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
        return ex.g_int;
      }
      if (typeof ex.g_string !== 'undefined') {
        return ex.g_string;
      }
      if (typeof ex.e_list_body !== 'undefined' && ex.e_list_body !== null
          && Array.isArray(ex.e_list_body.ps)) {
        return ex.e_list_body.ps.map(recur);
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
      if (typeof ex.g_string !== 'undefined') {
        return src(ex.g_string);
      }
      if (typeof ex.g_uri !== 'undefined') {
        return src(ex.g_uri);
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
