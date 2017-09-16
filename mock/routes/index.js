var express = require('express');
var router  = express.Router();
var crypto  = require('crypto');

router.get('/', function(req, res, next) {
   console.log('node server is start')
});

router.post('/reg', function(req, res){
    console.lg('reg user')
});

module.exports = router;