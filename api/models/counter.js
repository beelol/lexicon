var mongoose = require('mongoose');
var graphqlComposeMongoose = require('graphql-compose-mongoose');

const counterSchema = new mongoose.Schema({
  count: {
    type: Number
  },
});

var Counter = mongoose.model('Counter', counterSchema);

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; 
const CounterTC = graphqlComposeMongoose.composeWithMongoose(Counter, customizationOptions);

module.exports = {Counter, CounterTC};