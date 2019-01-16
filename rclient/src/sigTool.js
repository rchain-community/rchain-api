/** sigTool -- signing key generation, storage, and usage

ISSUE: pretty much subsumed by secretStorage. prune nacl dependency too.

@flow strict
 */
/* global exports, require */

const { b2h, h2b } = require('rchain-api');

const def = Object.freeze;

/*::

import nacl from 'tweetnacl';
import type { StorageArea } from './pathlib';

// SigningKey is the format we use to save the key pair
// with the secret key encrypted.
export type SigningKey = {
  label: string,
  secretKey: {
    // ISSUE: opaque type for hex?
    nonce: string,
    cipherText: string,
  },
  pubKey: string
}

export interface SigTool {
  // Generate and save key.
  generate({ label: string, password: string }): Promise<SigningKey>,
  // Get stored key.
  getKey(string): Promise<SigningKey | null>,
  // Decrypt private key and use it to sign message.
  signMessage(message: Uint8Array, signingKey: SigningKey, password: string): string
}

*/

exports.sigTool = sigTool;
function sigTool(local /*: StorageArea */, nacl /*: typeof nacl*/) /*: SigTool */ {
  function getKey(label) /*: Promise<SigningKey | null> */{
    return local.get(label).then(items => chkKey(items[label]));
  }

  function chkKey(it /*: mixed*/) /*: SigningKey | null */ {
    if (it === null) { return null; }
    if (typeof it !== 'object') { return null; }
    const { secretKey } = it;
    if (!secretKey || typeof secretKey !== 'object') { return null; }
    const { nonce } = secretKey;
    if (typeof nonce !== 'string') { return null; }
    const { cipherText } = secretKey;
    if (typeof cipherText !== 'string') { return null; }
    return {
      label: asStr(it.label),
      secretKey: { nonce, cipherText },
      pubKey: asStr(it.pubKey),
    };
  }

  function generate({ label, password }) {
    const signingKey = encryptedKey(nacl.sign.keyPair(), { label, password });
    return local.set({ [label]: signingKey }).then(() => signingKey);
  }

  function encryptedKey(keyPair, { label, password }) {
    const sk = encryptWithNonce(keyPair.secretKey, passKey(password));

    return {
      label,
      getKey,
      secretKey: {
        nonce: b2h(sk.nonce),
        cipherText: b2h(sk.cipherText),
      },
      pubKey: b2h(keyPair.publicKey),
    };
  }

  /**
   * Hash text password to get bytes for secretbox key.
   */
  function passKey(password /*: string*/) /*: Uint8Array */{
    return nacl.hash(utf8(password)).slice(0, nacl.secretbox.keyLength);
  }

  function encryptWithNonce(message /*: Uint8Array */, key) {
    const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
    const cipherText = nacl.secretbox(message, nonce, key);
    return { cipherText, nonce };
  }

  function signMessage(
    message /*: Uint8Array */,
    signingKey /*: SigningKey*/,
    password /*: string*/,
  ) {
    const nonce = h2b(signingKey.secretKey.nonce);
    const box = h2b(signingKey.secretKey.cipherText);
    const secretKey = nacl.secretbox.open(box, nonce, passKey(password));

    if (secretKey === null) {
      throw new Error('bad password');
    }

    return b2h(nacl.sign.detached(message, secretKey));
  }

  return def({ getKey, generate, signMessage });
}


function utf8(s /*: string*/) /*: Uint8Array*/ {
  const byteChars = unescape(encodeURIComponent(s));
  return Uint8Array.from([...byteChars].map(ch => ch.charCodeAt(0)));
}


function asStr(x /*: mixed*/) /*: string */ {
  if (typeof x !== 'string') { return ''; }
  return x;
}
