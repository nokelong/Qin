module.exports = function(req, res, next) {
	ajaxReturn = functio
}
function middleAjaxReturn(req, res, next) {
    ajaxReturn = function (resBody, overrideBody) {
    	res.json(Object.assign({
            resultCode: resBody.resultCode,
            description: resBody.description,
            body:resBody.body,
    	}, overrideBody))
    }
    next();
};
module.exports = middleAjaxReturn;