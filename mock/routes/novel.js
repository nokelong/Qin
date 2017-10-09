var express = require('express');
var router  = express.Router();
var novelCtr = require('../controllers/novelCtr');

/**
 * [获取男生栏目]
 * @return {[type]}        [description]
 */
router.post('/getBoysColumn', function(req, res) {
	
    var recId = req.body['recId'];
    var params = {
        recId: recId == '100' ? recId: '100'
    };
    
    novelCtr.getColumns(params, (result) =>{
    	ajaxReturn(res, result);        
    })

});
/**
 * 获取女生栏目
 * @return {[type]}        [description]
 */
router.post('/getGirlsColumn', function(req, res) {

    var recId = req.body['recId'];
    var params = {
        recId: recId == '101' ? recId: '101'
    };

    novelCtr.getColumns(params, (result) =>{
    	ajaxReturn(res, result);
    })
});
/**
 * 获取推荐栏目
 * @return {[type]}      [description]
 */
router.post('/getRecommendColumn', function(req, res) {
    
    var params = {
        recId: '101'
    };

    novelCtr.getColumns(params, function (result) {        
        ajaxReturn(res, result);
    });
});

/**
 * 获取小说详情
 * @return {[type]}        [description]
 */
router.post('/getNovelDetail', function(req, res) {
    
    let columnId = req.body['columnId'];
    let params = {
        columnId: Number(columnId)
    }; 

    console.log("getNovelDetail: "+ columnId);
    novelCtr.getColumns(params, (result) => {        
        ajaxReturn(res, result);
    });
});
/**
 * [根据关键字查找小说]
 * @return {[type]}      [description]
 */
router.post('/getNovelByKeys', function(req, res) {
    let key = req.body['key'];
    let params = {
        key: key
    };
    console.log("getNovelDetail key: "+ key);
    novelCtr.getBykeys(params, (result) => {
        ajaxReturn(res, result);
    });
});


module.exports = router;