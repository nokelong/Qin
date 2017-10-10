
var novel = require('../model/novel');

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
        
        novel.get(params, (error, novels) => {

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
    getBykeys: function(params, callback) {
        var key = req.body['key'];
        var params = {
            key: key
        };

        console.log("getNovelByKeys key: "+ key);
        novel.getByKey(params, (error, novels) => {
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
    }
}
module.exports = NovelCtr;