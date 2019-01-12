/** pathlib -- object-oriented file I/O

Inspired by https://docs.python.org/3/library/pathlib.html
with influence from Emily. @@TODO: cite Emily

 */
/* global require, exports */

// @flow

/*::
import fs from 'fs';
import path from 'path';

type ReadAccess = {
  readBytes(): Promise<Uint8Array>;
  readText(encoding?: string): Promise<string>;
  joinPath(other: string): ReadAccess;
  name(): string;
}


type WriteAccess = {
  writeText(text: string): Promise<void>;
  joinPath(other: string): WriteAccess;
  readOnly(): ReadAccess;
}
 */

const { asPromise } = require('./asPromise');

exports.fsReadAccess = fsReadAccess;
function fsReadAccess(path /*: string*/,
                      readFile /*: typeof fs.readFile */,
                      join /*: typeof path.join */,
                      ) /*: ReadAccess*/ {
    return Object.freeze({
      name: () => path,
      readText: (encoding /*: string*/ = 'utf8') =>
        asPromise(f => readFile(path, encoding, f)),
      readBytes: () => asPromise(f => readFile(path, f)),
      joinPath: (other) => fsReadAccess(join(path, other), readFile, join)
    });
}

exports.fsWriteAccess = fsWriteAccess;
function fsWriteAccess(path /*: string*/,
                       writeFile /*: typeof fs.writeFile */,
                       readFile /*: typeof fs.readFile */,
                       join /*: typeof path.join */,
                       ) /*: WriteAccess*/ {
    return Object.freeze({
      writeText: (text) => asPromise(f => writeFile(path, text, f)),
      joinPath: (other) => fsWriteAccess(join(path, other), writeFile, readFile, join),
      readOnly: () => fsReadAccess(path, readFile, join)
    });
}
