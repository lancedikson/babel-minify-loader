const minify = require("babel-minify");

module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;

  const {code} = minify(content, {
    mangle: {
      keepClassName: true,
    },
  });
  return code;
}
module.exports.seperable = true;
