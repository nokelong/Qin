var express = require('express');
var router  = express.Router();
var novelCtr = require('../controllers/novelCtr');

/**
 * [获取栏目列表信息]
 * @return {[type]}        [description]
 */
router.post('/getColumns', function(req, res) {
    novelCtr.getColumns(req, (result) =>{
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
/**
 * [查找小说目录]
 * @return {[type]}      [description]
 */
router.post('/getNovelCatalog', function(req, res) {
    
    novelCtr.getCatalog(req, (result) => {
        ajaxReturn(res, result);
    });
});
/**
 * [查找小说分类]
 * @return {[type]}      [description]
 */
router.post('/getCategoryInfo',function(req, res) {
    novelCtr.getCategoryInfo(req, (result) => {
        ajaxReturn(res, result);
    });
})

module.exports = router;