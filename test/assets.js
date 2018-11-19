const { readFileSync } = require('fs');

exports.link = link;
function link(name) {
  return readFileSync(require.resolve(name), 'utf8');
}
