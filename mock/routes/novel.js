var express = require('express');
var router  = express.Router();
var novelCtr = require('../controllers/novelCtr');

//获取男生栏目
router.post('/getBoysColumn', function(req, res) {
	
    var recId = req.body['recId'];
    var params = {
        recId: recId == '100' ? recId: '100'
    };
    
    novelCtr.getColumns(params, (result) =>{
    	ajaxReturn(res, result);        
    })

});
//获取女生栏目
router.post('/getGirlsColumn', function(req, res) {

    var recId = req.body['recId'];
    var params = {
        recId: recId == '101' ? recId: '101'
    };

    novelCtr.getColumns(params, (result) =>{
    	ajaxReturn(res, result);
    })
});
//获取推荐栏目
router.post('/getRecommendColumn', function(req, res) {
    
    var params = {
        recId: '101'
    };

    novelCtr.getColumns(params, function (result) {        
        ajaxReturn(res, result);
    });
});

//获取小说详情
router.post('/getNovelDetail', function(req, res) {
    
    var cid = req.body['columnId'];
    console.log("getNovelDetail: "+ cid);
    var params = {
        columnId: cid
    };
    // console.log(JSON.stringify(params))
    novelCtr.getColumns(params, (result) => {        
        ajaxReturn(res, result);
    });
});
//获取栏目详情
router.post('/columnDetail', function(req, res) {

});


module.exports = router;