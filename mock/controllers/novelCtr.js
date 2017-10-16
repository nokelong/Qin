
var Novel = require('../model/novel');
var Catalog = require('../model/catalog');

const NovelCtr = {
    getBoysColumn: function(req, callback) {
        var recId = req.body['recId'];
        var params = {
            recId: recId == '100' ? recId: '100'
        };

        this._getColumns(params, callback);
    },
    getGirlsColumn: function(req, callback) {
        var recId = req.body['recId'];
        var params = {
            recId: recId == '101' ? recId: '101'
        };        
        
        this._getColumns(params, callback);
    },
    getNovelDetail: function(req, callback) {
        var columnId = req.body['columnId'];
        var params = {
            columnId: Number(columnId)
        }; 

        this._getColumns(params, callback);
    },   
    getRecommendColumn: function(req, callback) {
        var params = {
            recId: '101'
        };
    
        this._getColumns(params, callback);
    },
    _getColumns: function(params, callback) {   	
        
        Novel.get(params, (error, novels) => {

        	var results = {
        		description: "",
	            resultCode: 999,
	            body:null
        	};

        	if(error) {
        		results.description = error;
        	} else {
        		results.resultCode = 0;
        		results.body = {
        			list: novels
        		}        		
        	}
        	return callback(results);            
        });
    },
    getBykeys: function(req, callback) {
        var key = req.body['key'];
        var params = {
            key: key
        };

        console.log("getNovelByKeys key: "+ key);
        Novel.getByKey(params, (error, novels) => {
            var results = {
                description: "",
                resultCode: 999,
                body:null
            };

            if(error) {
                results.description = error;
            } else {
                results.resultCode = 0;
                results.body = {
                    list: novels
                }         
            }
            return callback(results);  
        });
    },
    getCatalog: function(req, callback) {
        var params = {
            columnId: Number(req.body['columnId'])
        };
        var results = {
            description: "",
            resultCode: 999,
            body:null
        };
        
        console.log('getCatalog params: ' + JSON.stringify(params));
        Catalog.get(params, (error, catalogs) => {
            if(error) {
                results.description = error;
            } else {
                
                let len = catalogs.length;
                results.resultCode = 0;
                results.body = {
                    items: catalogs,
                    newNovelChapter: catalogs[len-1],
                    paging: {
                        "currentPageNum":1,
                        "perPageCount":20,
                        "totalCount": len,
                        "totalPageNum": len/20
                    }
                } 
            }
            return callback(results); 
        });       
    }
}
module.exports = NovelCtr;