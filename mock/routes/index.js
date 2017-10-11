var express = require('express');
var router  = express.Router();
var adsCtr  = require('../controllers/adsCtr');
var authCtr = require('../controllers/authCtr');

router.get('/', function(req, res, next) {  
   ajaxReturn(res, { description: 'node server is start', resultCode: 0, body: null})
});

router.post('/getPositionContent', function(req, res){
    adsCtr.get((results) => {    	
        ajaxReturn(res, results);
    });
});

router.post('/checkLogin', function(req, res) {
    authCtr.checkLogin(req, (results) =>{
    	ajaxReturn(res, results);
    })
});

router.post('/login', function(req, res) {
    authCtr.login(req, (results)=>{
        ajaxReturn(res, results);
    });
});

router.post('/regist', function(req, res) {
    authCtr.regist(req, (results)=>{
        ajaxReturn(res, results);
    });
});

router.post('/logout', function(req, res) {
     authCtr.logout(req, (results)=>{
        ajaxReturn(res, results);
    });
});
module.exports = router;