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
	/**
	 * [getResultByKeys 根据关键字查询小说]
	 * @return {[type]} [description]
	 */
	getResultByKeys (options) {
		
		let param = {
			url:'girlsColumn.json'
		};
		let results = [];
        let key = options.keys;

		param.success = (result) =>{           
            // debugger	
            // this.getBoysColumn()
            // this.getGirlsColumn()        
            let list = result.body.list;
			if(options.callback && typeof options.callback == 'function' ){
				list.map((re,index) =>{
					// debugger
					if(re.columnName.includes(key) || re.longDescription.includes(key) 
						|| re.categoryName.includes(key) ||re.author.includes(key)) {
						results.push(re)
					}					
				})
				options.callback(results);
			}            
		};
		param.fail = (result)=>{
            console.log('getResultByKeys fail');
		};
		
		xhr.get(param);
	}
}

export default new NovelServices()