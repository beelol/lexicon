// An item defined in the "lexicon."
var mongoose = require('mongoose');
var createGqlModel = require('../util').createGqlModel;
var formatFilename = require('../util').formatFilename;
var scriptName = formatFilename(__filename);

const schema = new mongoose.Schema({
  properties: [{
    name: String,
    value: String
  }]
});

module.exports = createGqlModel(scriptName, schema, {});