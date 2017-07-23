import xhr from './xhr/httpClient'
import utils from 'UTILS/utils'

class InfoServices {
	/**
	 * [getRecommendColumn ]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	getNewInfoColumn (options) {
		let param = {
			url:'infoColumn.json'
		};
		param.success = (result) =>{
            let body = {};
            let list = [];

			if(result && result.body){
				body = result.body;
			}
			if(options.callback && typeof options.callback == 'function' ){
				// debugger
				if(body && body.list){
					list = body.list;
				}			
				options.callback(list);
			}            
		};
		param.fail = (result)=>{
            console.log('getNewInfoColumn fail');
		};
		
		xhr.get(param);
	},
	getColumnDetail(){
		let param = {
           
		};
		param.success = (result) =>{
            let body = {};
            let list = [];

			if(result && result.body){
				body = result.body;
			}
			if(options.callback && typeof options.callback == 'function' ){
				// debugger
				if(body && body.list){
					list = body.list;
				}			
				options.callback(list);
			}            
		};
		param.fail = (result)=>{
            console.log('getNewInfoColumn fail');
		};
		xhr.post(param);
	}
}

export default new InfoServices()