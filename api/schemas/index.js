var graphqlCompose = require('graphql-compose');
var counterSchema = require('./counter');
var itemSchema = require('./item');

graphqlCompose.schemaComposer.Query.addFields({
  ...counterSchema.CounterQuery,
  ...itemSchema.ItemQuery
});

graphqlCompose.schemaComposer.Mutation.addFields({
  ...counterSchema.CounterMutation,
  ...itemSchema.ItemMutation
});

module.exports = graphqlCompose.schemaComposer.buildSchema();
