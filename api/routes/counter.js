var express = require('express');
var router = express.Router();

/* GET users listing. */
router.patch('/', function(req, res, next) {
  // res.send('respond with a resource');
  console.log(req.body);
  console.log(res.body);
  // res.json(JSON.parse(body)._links.self);
});

module.exports = router;
