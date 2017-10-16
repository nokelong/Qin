import xhr from './xhr/httpClient'

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
			url: '/getRecommendColumn',
			data: {}
		};		
	
		xhr.post(param).then((result)=>{
            
            
			if(options.callback && typeof options.callback == 'function' ){	
				options.callback(result);
			}            
		}).catch((error) => {
			console.log('getRecommendColumn fail' +error);
		});
	}
	/**
	 * [getBoysColumn 获取男生小说]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 * @return {[type]}   [暂用axios get取json]
	 */
	getBoysColumn (options) { 
		
		let param = {
			url: '/getBoysColumn',
			data: {
			    recId: 100
			}
		};
	
		xhr.post(param).then((result)=>{
            
			if(options.callback && typeof options.callback == 'function' ){				
				options.callback(result);
			}            
		}).catch((error) => {
			console.log('getBoysColumn fail' +error);
		});
	}
	/**
	 * [getGirlsColumn 获取女生小说]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 * @return {[type]}   [暂用axios get取json]
	 */
	getGirlsColumn (options) {
		let param = {
			url:'/getGirlsColumn',
			data: {
			    recId: 101
			}
		};		
		
		xhr.post(param).then((result) => {            
			if(options.callback && typeof options.callback == 'function' ){			
				options.callback(result);
			}            
		}).catch((error) => {
			console.log('GirlsColumn fail' +error);
		});
	}
	/**
	 * [getGirlsColumn 获取小说目录]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 * @return {[type]}   [暂用axios get取json]
	 */
	getNovelCatalog (options) {
		let param = {
			url: '/getNovelCatalog',
			data: {
				columnId : 40901 // options.cid
			} 
		};		
		
		xhr.post(param).then((result) => {           
			if(options.callback && typeof options.callback == 'function' ){				
				options.callback(result);
			}
		}).catch((error) => {            
            console.log('catalog fail');
		});
	}
	/**
	 * [getResultByKeys 根据关键字查询小说]
	 * @return {[type]} [description]
	 */
	getResultByKeys (options) {
		
		let param = {
			url:'/getNovelByKeys',
			data: {
				key: options.keys
			}
		};
		let results = [];
		
		xhr.post(param).then((result) => {
            let list = result.body.list;
			if(options.callback && typeof options.callback == 'function' ){				
				options.callback(list);
			}            
		}).catch((error) => {
			console.log('getResultByKeys fail' +error);
		});
	}
    
    getNovelDetail (options) {

    	let param = {
    		url: '/getNovelDetail',
    		data: {
    			columnId: options.columnId
    		}
    	};        
        // debugger
		xhr.post(param).then((results) => {

            let list = results.body.list;
            let result = list.length > 0 ? list[0]: {};			
			
			if(options.callback && typeof options.callback == 'function' ){
				options.callback(result);
			} 
		}).catch((error) => {
			console.log('getNovelDetail fail' +error);
		});
    }
}
export default new NovelServices()