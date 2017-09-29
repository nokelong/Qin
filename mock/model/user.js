var mongoDb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
}

User.prototype.save = function (callback) {
    
    var user = {
    	name : this.name,
    	password : this.password
    }
    
    console.log(user.toString())
    mongoDb.open(function(error, db) {
        if(error) {
        	return callback(error);
        }
        
        db.collection('users', function(error, collection) {
            if(error) {
                mongoDb.close();
                return callback(error);
            }

            collection.insert(user, {safe: true}, function(error, user) {
            	mongoDb.close();
            	return callback(error, user);
            })
        })
    })
};
User.prototype.get = function (username, callback) {
    mongoDb.open(function(error, db) {
        if(error) {
            return callback(error);
        }
        
        var query = {};
        if (username) {
            query.name = username;
        }
        db.collection('users', function(error, collection) {
            if(error) {
            	mongoDb.close();
            	return callback(error);
            }         
            collection.findOne(query, function(error, doc) {
                mongoDb.close();
                if(doc) {
                	var user = new User(doc);
                	callback(error, user);
                } else {
                	callback(error, null);
                }
            })
        })
    })
};
module.exports = User;