var MongoClient = require('mongodb').MongoClient;
var config = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
}

User.prototype.save = function (callback) {
    
    var user = {
    	name : this.name,
    	password : this.password
    }    
    MongoClient.connect(config, function(error, db) {
        if(error) {
            return callback(error);
        }

        db.collection('users').insertOne(user, {w:1}, function(error, result) {
            db.close();
            return callback(error, result);
        });
    });    
};
User.prototype.get = function (username, callback) {

    MongoClient.connect(config, function(error, db) {
        if(error) {
            return callback(error);
        }
        var query = {};
        if (username) {
            query.name = username;
        }
        db.collection('users').findOne(query, function(error, doc) {
            db.close();            
            
            if(doc) {
                let user = new User(doc);
                return callback(null, user);
            } else{
                return callback(error);
            }
        });
    });   
};
module.exports = User;