var CounterTC = require('../models/counter').CounterTC;

// STEP 3: Add needed CRUD Counter operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing
exports.CounterQuery = {
  counterById: CounterTC.getResolver('findById'),
  counterByIds: CounterTC.getResolver('findByIds'),
  counterOne: CounterTC.getResolver('findOne'),
  counterMany: CounterTC.getResolver('findMany'),
  counterCount: CounterTC.getResolver('count'),
  counterConnection: CounterTC.getResolver('connection'),
  counterPagination: CounterTC.getResolver('pagination'),
};

exports.CounterMutation = {
  counterCreateOne: CounterTC.getResolver('createOne'),
  counterCreateMany: CounterTC.getResolver('createMany'),
  counterUpdateById: CounterTC.getResolver('updateById'),
  counterUpdateOne: CounterTC.getResolver('updateOne'),
  counterUpdateMany: CounterTC.getResolver('updateMany'),
  counterRemoveById: CounterTC.getResolver('removeById'),
  counterRemoveOne: CounterTC.getResolver('removeOne'),
  counterRemoveMany: CounterTC.getResolver('removeMany'),
};