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
        db.collection('users').find(query).to(function(error, docs) {
            db.close();
            if(error) {
                return callback(error);
            }          
            
            let users = {};
            console.log('User docs:' +docs) ;     
            docs.forEach(function(doc, index) {                
                let user = new User(doc);
                users.push(user);
            });
            return callback(null, users);
        });
    });   
};
module.exports = User;