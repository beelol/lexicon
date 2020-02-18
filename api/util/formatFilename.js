var capitalizeFirstLetter = require('./capitalizeFirstLetter');
var path = require('path');

module.exports = function (filename) {
  return capitalizeFirstLetter(path.basename(filename, path.extname(module.filename)).toLowerCase());
}