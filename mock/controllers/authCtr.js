var crypto = require('crypto');
var User = require('../model/user');

const AuthCtr = {
    login: function(req, callback) {

        var password = req.body['password'];
        var username = req.body['username'];
        var md5 = crypto.createHash('md5');
        var pass = md5.update(password).digest('base64');  
        var results = {
            description: "用户未登录",
            resultCode: 999,
            body:null
        };
        console.log("password:"+password,",username:"+username);

        if(req.session.user) {
        	results.body = {
                username: req.session.user.name
            };
            results.resultCode = 0;
            results.description = '用户登录成功';
            return callback(results);         
        } else {   //读取数据库
            User.get(username, (error, user) => {
                if(error) {
                    results.description = error;                    
                } else if(!user) {
                    results.description = '用户不存在'
                } else if(user) { 
                    if (user.password != pass) {
                        results.description = '用户输入的用户名/密码错误';
                    } else{
                        results.body = {
                            username: user.name
                        };
                        results.resultCode = 0;
                        results.description = '用户登录成功'; 
                        req.session.user = user;
                    }
                }
                return callback(results);
            });
        }
    },
    logout: function(req, callback) {

        var results = {
            description: "用户未登录",
            resultCode: 999,
            body:null
        };
        
        if(req.session.user) {
        	req.session.user = null;
            results.resultCode = 0;
            results.description = '用户退出登录成功'   	
        }
        return callback(results);        
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
    },
    regist: function(req, callback) {
        
        var password = req.body['password'];
        var username = req.body['username'];
        var md5 = crypto.createHash('md5');
        var pass = md5.update(password).digest('base64'); 
        var results = {
            description: "注册失败",
            resultCode: 999,
            body:null
        };

        if(req.body['confirmPass'] != password) {
            results.description = '两次密码不一致';
            return callback(results);
        }

        var newUser = new User({
            name: username,
            password: pass
        });

        User.get(username, (error, user) =>{
            if(user) {
                results.description = '用户已存在';
                return callback(results);
            } 
            if(error) {
                results.description = error;
                return callback(results);
            } 
            newUser.save((error, result) =>{
                if(error) {
                    results.description = error;
                } else {
                    results.description = '注册成功';
                    results.resultCode = 0;
                }
                return callback(results);
            });            
        });
    }
}

module.exports = AuthCtr;