var TC = require('../models/counter').TC;

// STEP 3: Add needed CRUD Counter operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing
exports.CounterQuery = {
  counterById: TC.getResolver('findById'),
  counterByIds: TC.getResolver('findByIds'),
  counterOne: TC.getResolver('findOne'),
  counterMany: TC.getResolver('findMany'),
  counterCount: TC.getResolver('count'),
  counterConnection: TC.getResolver('connection'),
  counterPagination: TC.getResolver('pagination'),
};

exports.CounterMutation = {
  counterCreateOne: TC.getResolver('createOne'),
  counterCreateMany: TC.getResolver('createMany'),
  counterUpdateById: TC.getResolver('updateById'),
  counterUpdateOne: TC.getResolver('updateOne'),
  counterUpdateMany: TC.getResolver('updateMany'),
  counterRemoveById: TC.getResolver('removeById'),
  counterRemoveOne: TC.getResolver('removeOne'),
  counterRemoveMany: TC.getResolver('removeMany'),
};