// An item defined in the "lexicon."
var mongoose = require('mongoose');
var createGqlModel = require('../util').createGqlModel;
var formatFilename = require('../util').formatFilename;
var scriptName = formatFilename(__filename);

const schema = new mongoose.Schema({
  name: String,
  image: String,
  properties: [{
    type: [Object],
    name: {type: String, required: true},
    value: {type: String, required: true}
  }]
});

module.exports = createGqlModel(scriptName, schema, {});