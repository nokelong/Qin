
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var config = require('../db/dbconfig');

function Catalog(catalog) {
    this.createDate = catalog.createDate;
    this.chapterOrder = catalog.chapterOrder;
    this.columnId = catalog.columnId;
    this.columnName = catalog.columnName;
    this.isLocked = catalog.isLocked;
    this.modifyDate = catalog.modifyDate;
    this.orderId = catalog.orderId;
    // this.serialId = catalog.serialId;
    // this.status = catalog.status;
    this.title = catalog.title;
}
Catalog.prototype.save = function(callback) {

    var catalog = {
        createDate: this.createDate ,
        chapterOrder: this.chapterOrder,
        columnId: this.columnId,
        columnName: this.columnName ,
        isLocked: this.isLocked ,
        orderId: this.orderId ,
        title: this.title,
        modifyDate: this.modifyDate
    }
   
    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
        db.collection('catalogs').insertOne(catalog, {w:1}, function(error, result) {
            assert.equal(null, error);
            db.close();
            return callback(error, result);
        })
    });
   
}
Catalog.saveAll = function(list,callback) {   

    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
        db.collection('catalogs').insertMany(list, function(error, result) {
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
Catalog.get = function(param, callback) {	
	
    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
        var query = {};
        if (param) {
            query = param;
        }        
        db.collection('catalogs').find(query).sort({"modifyDate": 1}).toArray(function(error, docs) {                       
          
            db.close();
            if (error) {
                return callback(error);
            }
            
            var catalogs = [];
            
            docs.forEach(function(doc, index) {                
                var catalog = new Catalog(doc);
                catalogs.push(catalog);
            });
            return callback(null, catalogs);
        });
    });
};

module.exports = Catalog;