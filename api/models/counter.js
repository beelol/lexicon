var mongoose = require('mongoose');
var createGqlModel = require('../util').createGqlModel;
var formatFilename = require('../util').formatFilename;

var scriptName = formatFilename(__filename);

const schema = new mongoose.Schema({
  count: {
    type: Number
  },
});

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
module.exports = createGqlModel(scriptName, schema, {});