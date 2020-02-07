var graphqlCompose = require('graphql-compose');
var counterSchema = require('./counter');

graphqlCompose.schemaComposer.Query.addFields({
  ...counterSchema.CounterQuery
});

graphqlCompose.schemaComposer.Mutation.addFields({
  ...counterSchema.CounterMutation
});

module.exports = graphqlCompose.schemaComposer.buildSchema();
