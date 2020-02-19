var mongoose = require('mongoose');

mongoose.plugin(require('mongoose-slug-generator'));

var Counter = require('./counter').model;
var Item = require('./item').model;

const connectDb = () => {
  return mongoose.connect(/* process.env.DATABASE_URL */
    "mongodb://localhost:27017/node-express-mongodb-server");
};

exports.connectDb = connectDb;
exports.all = {Counter, Item};