import xhr from './xhr'
const rootPath = '/../../assets/db/'
const AJAXTIMEOUT =  60000;
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
	headers= {"Content-Type" : 'text/json'},
	method = 'get', 
	url, 
	data,
	success, 
	fail, 
	complete,
	timeout = AJAXTIMEOUT
	}) =>{
    
    debugger
    xhr.send({
    	method:method,
    	url:rootPath + url,
    	data:data,
        success:success,
        fail:fail,
        complete:complete
    });
}

export default call;