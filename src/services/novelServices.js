import xhr from './xhr/httpClient'
import utils from 'UTILS/utils'

class NovelServices {
	/**
	 * [getRecommendColumn 获取重磅推荐小说]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 * @return {[type]}   [暂用axios get取json]
	 */
	getRecommendColumn (options) {
		let param = {
			url:'recommendColumn.json'
		};
		param.success = (result) =>{
            let body = {};
            let list = [];
			if(result && result.body){
				body = result.body;
			}
			if(options.callback && typeof options.callback == 'function' ){
				
				if(body && body.list){
					list = (body.list);
				}
				options.callback(list);
			}            
		};
		param.fail = (result)=>{
            console.log('getRecommendColumn fail');
		};
		
		xhr.get(param);
	}
	/**
	 * [getBoysColumn 获取男生小说]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 * @return {[type]}   [暂用axios get取json]
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
	/**
	 * [getGirlsColumn 获取女生小说]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 * @return {[type]}   [暂用axios get取json]
	 */
	getGirlsColumn (options){
		let param = {
			url:'girlsColumn.json'
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
            console.log('GirlsColumn fail');
		};
		
		xhr.get(param);
	}
	/**
	 * [getGirlsColumn 获取小说目录]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 * @return {[type]}   [暂用axios get取json]
	 */
	getNovelCatalog (options){
		let param = {
			url:'catalog.json'
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
					list = (body.list);
				}
				options.callback(body);
			}            
		};
		param.fail = (result)=>{
            console.log('catalog fail');
		};
		
		xhr.get(param);
	}
}

export default new NovelServices()