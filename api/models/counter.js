var mongoose = require('mongoose');
var createGqlModel = require('../util');

console.log(createGqlModel);

const schema = new mongoose.Schema({
  count: {
    type: Number
  },
});

console.log(__filename);

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
module.exports = createGqlModel("Counter", schema, {});