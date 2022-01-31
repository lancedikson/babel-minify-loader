const minify = require("babel-minify");

module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;

  const {code} = minify(content);
  return code;
}
module.exports.seperable = true;
