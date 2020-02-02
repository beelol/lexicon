var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({name: "bilal"});
});

module.exports = router;