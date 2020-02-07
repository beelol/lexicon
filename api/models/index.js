var mongoose = require('mongoose');
var Counter = require('./counter');

const connectDb = () => {
  return mongoose.connect(/* process.env.DATABASE_URL */
    "mongodb://localhost:27017/node-express-mongodb-server");
};

exports.connectDb = connectDb;
exports.all = {Counter};