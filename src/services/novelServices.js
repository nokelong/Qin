import xhr from './xhr/httpClient'

class NovelServices {
	/**
	 * [getRecommendColumn 获取重磅推荐小说]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]	
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
	 * [getBoysColumn 获取小说栏目信息]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]
	 */
	getColumns (options) { 
		
		let param = {
			url: '/getColumns',
			data: {
			    recId: options.recId,
			    categoryId: options.cateId
			}
		};
	
		xhr.post(param).then((result)=>{
            
			if(options.callback && typeof options.callback == 'function' ){				
				options.callback(result);
			}            
		}).catch((error) => {
			console.log('getColumns fail' +error);
		});
	}
	
	/**
	 * [getNovelCatalog 获取小说目录]
	 * @param  {[type]} options 参数对象
	 * @param  {Function} [options.callback] [成功回调]
	 * @param  {Function} [options.fail]     [失败回调]	
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
    /**
	 * [getResultByKeys 根据关键字查询小说]
	 * @return {[type]} [description]
	 */
    getNovelDetail (options) {

    	let param = {
    		url: '/getNovelDetail',
    		data: {
    			columnId: options.columnId
    		}
    	};        
        // debugger
		xhr.post(param).then((results) => {
			if(options.callback && typeof options.callback == 'function' ){
				options.callback(results);
			} 
		}).catch((error) => {
			console.log('getNovelDetail fail' +error);
		});
    }

    getCategoryInfo (options) {
        let param = {
        	url: '/getCategoryInfo',
        	data: {
        		type: options.type
        	}
        }

        xhr.post(param).then((results)=>{
            if(options.callback && typeof options.callback == 'function' ){
				options.callback(results);
			}
        }).catch((error)=>{
        	console.log('getCategoryInfo error:' + error)
        });
    }
    
}
export default new NovelServices()