var mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  count: {
    type: Number
  },
});

module.exports = mongoose.model('Counter', counterSchema);