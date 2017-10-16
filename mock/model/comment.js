var MongoClient = require('mongodb').MongoClient;
var config = require('../db/dbconfig');
var assert = require('assert');

function Comment(comment) {
	this.content = comment.content;
	this.createDate = comment.createDate ? comment.createDate: new Date();
	this.dependId  = comment.dependId;
	this.nickName  = comment.nickName;
}

Comment.prototype.save = function(callback) {
    
    var comment = {
        content: this.content,
        createDate: this.createDate,
        dependId: this.dependId,
        nickName: this.nickName
    }

    MongoClient.connect(config.url, function(err, db) {
        db.collection('comments').insertOne(comment, {w:1}, function(error, result) {
        	assert.equal(null, error);                 
            db.close();
            return callback(error, result);
        });
    });
};

Comment.get = function(param, callback) {
    MongoClient.connect(config.url, function(error, db) {
        
        var query = {};
        if(param) {
        	query = param;
        }
        console.log('comment get query: '+ JSON.stringify(query));
        db.collection('comments').find(query).sort({'createDate': 1}).toArray(function(error, docs) {
            db.close();
            if(error) {
            	return callback(error);
            }
            var comments = [];
            docs.forEach(function(doc, index) {
            	var comment = new Comment(doc);
                comments.push(comment);
            });
            return callback(null, comments);
        });
    });
};

module.exports = Comment;