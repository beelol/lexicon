var express = require('express');
var router = express.Router();
var models = require('../models')
var ObjectId = require('mongodb').ObjectID;

router.get('/', async function(req, res, next) {
  res.json({counters: await models.all.Counter.find()});
});

router.patch('/:id', async function(req, res, next) {
  console.log(req.body);
  
  var id = req.params.id;

  await models.all.Counter.updateOne({_id: ObjectId(id)}, { $set: { count: req.body.count } }, (err, raw) => {

    }
  );
});

router.get('/:id', async function(req, res, next) {
  var id = req.params.id;

  var result = {count: 0}

  await models.all.Counter.findOne({_id: ObjectId(id)}, function(err, foundCounter) {
    if(!err && foundCounter !== null) result = foundCounter;
  });

  res.json(result);
});


module.exports = router;
