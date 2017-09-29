var express = require('express');
var router  = express.Router();
var novelCtr = require('../controllers/novelCtr');

//获取男生栏目
router.post('/getBoysColumn', function(req, res) {
	console.log('getBoysColumn is post cccc')
    novelCtr.getBoysColumn((result) =>{
    	ajaxReturn(result);
    })
});
//获取女生栏目
router.post('/getGirlsColumn', function(req, res) {
    novelCtr.getGirlsColumn((result) =>{
    	ajaxReturn(result);
    })
});
//获取目录
router.post('/catalog', function(req, res) {
    
});
//获取栏目详情
router.post('/columnDetail', function(req, res) {

});
//获取推荐栏目
router.post('/getRecommendColumn', function(req, res) {
    var name = req.body['name'];
    novelCtr.getRecommendColumn(name, function (result) {        
        ajaxReturn({ description: 'node server is start', resultCode: 0, body: null})
    });
});

module.exports = router;