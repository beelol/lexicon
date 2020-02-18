// An item defined in the "lexicon."
var mongoose = require('mongoose');
var createGqlModel = require('../util').createGqlModel;

const schema = new mongoose.Schema({
  properties: [{
    name: String,
    value: String
  }]
});

module.exports = createGqlModel('Item', schema, {});