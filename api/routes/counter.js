var express = require('express');
var router = express.Router();

/* GET users listing. */
router.patch('/', function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
