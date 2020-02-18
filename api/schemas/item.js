var TC = require('../models/item').TC;

// STEP 3: Add needed CRUD item operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing
exports.ItemQuery = {
  itemById: TC.getResolver('findById'),
  itemByIds: TC.getResolver('findByIds'),
  itemOne: TC.getResolver('findOne'),
  itemMany: TC.getResolver('findMany'),
  itemCount: TC.getResolver('count'),
  itemConnection: TC.getResolver('connection'),
  itemPagination: TC.getResolver('pagination'),
};

exports.ItemMutation = {
  itemCreateOne: TC.getResolver('createOne'),
  itemCreateMany: TC.getResolver('createMany'),
  itemUpdateById: TC.getResolver('updateById'),
  itemUpdateOne: TC.getResolver('updateOne'),
  itemUpdateMany: TC.getResolver('updateMany'),
  itemRemoveById: TC.getResolver('removeById'),
  itemRemoveOne: TC.getResolver('removeOne'),
  itemRemoveMany: TC.getResolver('removeMany'),
};