import xhr from './xhr'
/**
 * [description]
 * @param  {String} options.method   [description]
 * @param  {[type]} options.url      [description]
 * @param  {[type]} options.data     [description]
 * @param  {[type]} options.success  [description]
 * @param  {[type]} options.fail     [description]
 * @param  {[type]} options.complete [description]
 * @return {[type]}                  [description]
 */
const call = ({ 
	headers= {"Content-Type" : 'text/plain','Mpost-bizId':'2001'},
	method = 'post', 
	url, 
	data = null ,
	success, 
	fail, 
	complete,
	...
	}) =>{

    xhr.send({
    	method:method,
    	url:url,
    	data:data,
        success:success,
        fail:fail,
        complete:complete,
        ...
    });
}

export default call;