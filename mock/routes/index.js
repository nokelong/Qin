var express = require('express');
var router  = express.Router();
var adsCtr  = require('../controllers/adsCtr');

router.get('/', function(req, res, next) {  
   ajaxReturn({ description: 'node server is start', resultCode: 0, body: null})
});

router.post('/getPositionContent', function(req, res){
    adsCtr.get((results) => {    	
        ajaxReturn(results);   
    });
});

module.exports = router;