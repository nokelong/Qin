module.exports = function(req, res, next) {
	ajaxReturn = functio
}
function middleAjaxReturn(req, res, next) {
	
    ajaxReturn = function (res, resBody) {
    	res.json(Object.assign({
	        resultCode: resBody.resultCode,
	        description: resBody.description,
	        body:resBody.body,
	    }))
    }
    next();
};
module.exports = middleAjaxReturn;