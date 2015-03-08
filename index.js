var del = require("del");

/**
 * Removes files and/or folders matching the glob.
 *
 * @param {String} globs Glob patterns to match
 * @param {Object} options See https://github.com/isaacs/node-glob#options
 */
module.exports = function(globs, options) {
  return function(cb) {
    del(globs, options || {}, cb);
  };
};
