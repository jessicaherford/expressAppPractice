var express = require('express');
var router = express.Router();
var hipstafy = require('..src/hipstafy.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
