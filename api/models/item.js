// An item defined in the "lexicon."
var mongoose = require('mongoose');
var createGqlModel = require('../util').createGqlModel;
var formatFilename = require('../util').formatFilename;
var scriptName = formatFilename(__filename);

const schema = new mongoose.Schema({
  name: { type: String, unique: true},
  image: String,
  slug: { type: String, unique: true},
  properties: [{
    type: [Object],
    name: {type: String, required: true},
    value: {type: String, required: true}
  }]
});

module.exports = createGqlModel(scriptName, schema, {});