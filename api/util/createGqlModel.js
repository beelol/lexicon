var mongoose = require('mongoose');
var graphqlComposeMongoose = require('graphql-compose-mongoose');

function createGqlModel(name, schema, options) {
  var model = mongoose.model(name, schema);

  // STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
  const TC = graphqlComposeMongoose.composeWithMongoose(model, options);

  return {model, TC}
}

module.exports = createGqlModel;