var config = require('./db');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

function User(user) {
    this.name = user.name;
    this.password = user.password;
}

User.prototype.save = function (callback) {
    
    var user = {
    	name : this.name,
    	password : this.password
    }    
    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }

        db.collection('users').insertOne(user, {w:1}, function(error, result) {
            db.close();
            return callback(error, result);
        });
    });    
};
User.get = function (username, callback) {
    
    MongoClient.connect(config.url, function(error, db) {

        if(error) {
            return callback(error);
        }
        var query = {};
        if (username) {
            query.name = username;
        }
        console.log('user get query:'+ JSON.stringify(query))
        db.collection('users').findOne(query, function(error, doc) {
            db.close();            
            
            console.log('user get doc:'+ doc)
            if(doc) {
                let user = new User(doc);
                return callback(null, user);
            } else{
                return callback(error, null);
            }
        });
    });   
};
module.exports = User;