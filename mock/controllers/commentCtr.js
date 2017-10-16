var Comment = require('../model/comment');
const CommentCtr = {
    post: function(req, callback) {

        var content = req.body['content'];
        var dependId = req.body['dependId'];
        var user = req.session.user;
        var results = {
            description: "发表评论失败",
            resultCode: 999,
            body:null
        };
        var comment = new Comment({
        	content: content,
        	nickName: user.name,
        	dependId: dependId
        });
        
        comment.save((error, result)=>{
            if(error) {
                results.description = error;
            } else {
                results.description = '发表评论';
                results.resultCode = 0;                
            }
            return callback(results);
        });
    },
    get: function(req, callback) {        
        
        var dependId = req.body['dependId'];
        var params = {        	
        	dependId: dependId
        };
        var results = {
            description: "发表评论失败",
            resultCode: 999,
            body:null
        };

        Comment.get(params, (error, comments)=> {
            if(error) {
                results.description = error;
            } else {
                results.description = '获取评论成功';
                results.resultCode = 0;
                results.body = {
                	list: comments
                }    
            }
            return callback(results);
        });
    }
}

module.exports = CommentCtr;
