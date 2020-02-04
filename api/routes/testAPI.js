var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({counter: 5});
});

module.exports = router;