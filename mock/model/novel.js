var config = require('./db');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

function Novel(novel) {
    this.author = novel.author;
    this.categoryId = novel.categoryId;
    this.columnId = novel.columnId;
    this.columnName = novel.columnName;
    this.description = novel.description;
    this.isEnd = novel.isEnd;
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
                       
            // assert.equal(null, error);
            // assert.equal(3, docs.length);
            db.close();

            if (error) {
                return callback(error);
            }
            
            var novels = [];
            docs.forEach(function(doc, index) {                
                var novel = new Novel(doc);
                novels.push(novel);
            });
            return callback(null, novels);
        });
    });
};

module.exports = Novel;