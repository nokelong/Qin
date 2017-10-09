var config = require('./db');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

function Novel(novel) {
    this.author = novel.author;
    this.categoryId = novel.categoryId;
    this.columnId = novel.columnId;
    this.columnName = novel.columnName;
    this.description = novel.description;
    this.longDescription = novel.longDescription;
    this.isEnd = novel.isEnd;
    this.subprice = novel.subprice;
    this.categoryName = novel.categoryName;
    this.columnImageUrl = novel.columnImageUrl;
}
Novel.prototype.save = function(callback) {

    var novel = {
        author: this.author ,
        categoryId: this.categoryId,
        columnId: this.columnId,
        columnName: this.columnName ,
        description: this.description ,
        isEnd: this.isEnd ,
        columnImageUrl: this.columnImageUrl
    }
   
    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
        db.collection('novels').insertOne(novel, {w:1}, function(error, result) {
            assert.equal(null, error);
            db.close();
            return callback(error, result);
        })
    });
   
}
Novel.saveAll = function(list,callback) {   

    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
        db.collection('novels').insertMany(list, function(error, result) {
            assert.equal(list.length, result.insertedCount);
            db.close();
            return callback(error, result);
        });
    });   
};
/**
 * [get 获取小说数据]
 * @param  {[type]}   param  {name:name} [查询参数对象]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Novel.get = function(param, callback) {	
	
    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
        var query = {};
        if (param) {
            query = param;
        }        
        db.collection('novels').find(query).toArray(function(error, docs) {                       
          
            db.close();
            if (error) {
                return callback(error);
            }
            
            var novels = [];
            console.log('model/novel get :' + docs)
            docs.forEach(function(doc, index) {                
                var novel = new Novel(doc);
                novels.push(novel);
            });
            return callback(null, novels);
        });
    });
};

Novel.getByKey = function(param, callback) {

    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
         
        let dbConnection = db.collection('novels');
        let query = {};
        if (param) {
            query = { $text:{$search: param.key}};
        }
        dbConnection.createIndex( {  //建立索引
            columnName: "text", 
            longDescription: "text", 
            author: "text", 
            categoryName: 'text' 
        } );
        console.log('getByKey: '+ JSON.stringify(query))
        dbConnection.find(query).toArray(function(error, docs) {
            db.close();
            if (error) {
                return callback(error);
            }
            
            let novels = [];
            console.log('getByKey docs:' +docs) ;     
            docs.forEach(function(doc, index) {                
                let novel = new Novel(doc);
                novels.push(novel);
            });
            return callback(null, novels);
        });
    }); 
};

module.exports = Novel;