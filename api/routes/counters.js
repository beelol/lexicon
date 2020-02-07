var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.patch('/', function(req, res, next) {
  console.log(req.body);
});

router.get('/:id', function(req, res, next) {
    res.json({counter: 0});
});


module.exports = router;
