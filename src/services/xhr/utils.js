import * as tips from './tips'
/**
 * [生成CGUID]
 * @return {[type]} [description]
 */
export const getCGUID = () =>{
	const padding = (n, m) =>{
		let len = (m || 2) - (1 + Math.floor(Math.log(n | 1) / Math.LN10 + 10e-16));
        return new Array(len + 1).join("0") + n;
	}
	let now = new Date();
    return '' + padding(now.getHours()) + padding(now.getMinutes()) + padding(now.getSeconds()) + padding(now.getMilliseconds(), 3) + padding(Math.ceil(Math.random() * 9999), 4);
}
export const getResponseInfo = (conf) =>{
	let xhr = conf.xhr;
    let json;
    let responseText = xhr.responseText;
    let resHeaders = T.ajax.utils.getHeaders(xhr);

    //序列化json
    let isJSON = conf.isJSON || /json|javascript/i.test(resHeaders["Content-Type"]) || xhr.responseText.indexOf("{") == 0;
    if (isJSON) {
        json = T.tryEval(responseText);
    }
    return { responseText,json};
}
