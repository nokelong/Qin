var express = require('express');
var router  = express.Router();
var novelCtr = require('../controllers/novelCtr');

/**
 * [获取男生栏目]
 * @return {[type]}        [description]
 */
router.post('/getBoysColumn', function(req, res) {
	      
    novelCtr.getBoysColumn(req, (result) =>{
        ajaxReturn(res, result);
    });
    // novelCtr.getColumns(params, (result) =>{
    // 	ajaxReturn(res, result);        
    // })
});
/**
 * 获取女生栏目
 * @return {[type]}        [description]
 */
router.post('/getGirlsColumn', function(req, res) {
   
    novelCtr.getGirlsColumn(req, (result) =>{
    	ajaxReturn(res, result);
    })
});
/**
 * 获取推荐栏目
 * @return {[type]}      [description]
 */
router.post('/getRecommendColumn', function(req, res) {
    
    novelCtr.getRecommendColumn(req, function (result) {        
        ajaxReturn(res, result);
    });
});

/**
 * 获取小说详情
 * @return {[type]}        [description]
 */
router.post('/getNovelDetail', function(req, res) {
    
    novelCtr.getNovelDetail(req, (result) => {        
        ajaxReturn(res, result);
    });
});
/**
 * [根据关键字查找小说]
 * @return {[type]}      [description]
 */
router.post('/getNovelByKeys', function(req, res) {
    
    novelCtr.getBykeys(req, (result) => {
        ajaxReturn(res, result);
    });
});


module.exports = router;