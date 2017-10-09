var user = require('../model/user');

const AuthCtr = {
    login: function(req, res, next) {
        if(req.session.user) {
        	console.log('用户已登录')
        }
    },
    logOut: function(req, res, next) {
        if(!req.session.user) {
        	console.log('用户未登录');
        	return ;
        }
        
        req.session.user = null;
        next()
    },
    checkLogin: function(callback) {
        if(req.session.user) {
            callback(req.session.user)
        }
    }
}

module.exports = AuthCtr;