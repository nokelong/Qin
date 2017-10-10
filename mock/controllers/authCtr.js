var crypto = require('crypto');
var user = require('../model/user');

const AuthCtr = {
    login: function(req, callback) {

        var password = req.body['password'];
        var username = req.body['username'];
        console.log("password:"+password,",username:"+username);
        var md5 = crypto.createHash('md5');
        var pass = md5.update(password).digest('base64');   

        let results = {
            description: "用户未登录",
            resultCode: 999,
            body:null
        };
        if(req.session.user) {
        	results.body = req.session.user;
            results.resultCode = 0;
            results.description = '用户登录成功';
            return callback(results);         
        } else {   //读取数据库
            user.get(username, (error, user) => {
                if(error) {
                    results.description = error;                    
                } else if(!user) {
                    results.description = '用户不存在'
                } else if(user) { 
                    if (user.pass != password) {
                        results.description = '用户输入的用户名/密码错误';
                    } else{
                        results.body = req.session.user;
                        results.resultCode = 0;
                        results.description = '用户登录成功'; 
                    }
                }
                return callback(results);
            });
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
    checkLogin: function(req, callback) {

        var results = {
            description: "用户未登录",
            resultCode: 999,
            body:null
        };
        console.log("checkLogin session.user :" + req.session.user);
        if(req.session.user) {
            results.body = req.session.user;
            results.resultCode = 0;
            results.description = '用户已登录';
        } 
        return callback(results)
    }
}

module.exports = AuthCtr;