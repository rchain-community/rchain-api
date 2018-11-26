/**
 * assets - treat text files as link-time artifacts.
 *
 * With respect to ocap discipline, we regard this as part of the
 * module loading infrastructure rather than a run-time operation.
 *
 * An alternative implementation would be a pre-processor
 * that in-lines the contents of the linked data as constants.
 */
const { readFileSync } = require('fs');

exports.link = link;
function link(name) {
  return readFileSync(require.resolve(name), 'utf8');
}
