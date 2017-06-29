import xhr from './xhr/httpClient'
import utils from '../utils/utils'

class NovelServices {
	/**
	 * [getRecommendColumn ]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	getRecommendColumn (options) {
		let param = {
			url:'RecommendColumn.json'
		};
		param.success = (result) =>{
            let body = {};
            
			if(result && result.body){
				body = result.body;
			}
			if(options.callback && typeof options.callback == 'function' ){
				options.callback(body);
			}            
		};
		param.fail = (result)=>{
            console.log('getRecommendColumn fail');
		};
		
		xhr.get(param);
	}
	/**
	 * [getBoysColumn ]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	getBoysColumn (options){
		let param = {
			url:'boysColumn.json'
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
					list = utils.rebuildData(body.list,3);
				}
				options.callback(list);
			}            
		};
		param.fail = (result)=>{
            console.log('boysColumn fail');
		};
		
		xhr.get(param);
	}
}

export default new NovelServices()