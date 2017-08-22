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
			url:'boysColumn.json'
		};		
		
		xhr.get(param).then((result)=>{
            
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
			url:'boysColumn.json'
		};		
		
		xhr.get(param).then((result)=>{
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
				options.callback(list);
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
			url:'girlsColumn.json'
		};		
		
		xhr.get(param).then((result) => {
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
				options.callback(list);
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
			url:'catalog.json'
		};		
		
		xhr.get(param).then((result) => {
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
			url:'girlsColumn.json'
		};
		let results = [];
        let key = options.keys;
		
		xhr.get(param).then((result) => {
            let list = result.body.list;
			if(options.callback && typeof options.callback == 'function' ){
				list.map((re,index) =>{					
					if(re.columnName.includes(key) || re.longDescription.includes(key) 
						|| re.categoryName.includes(key) ||re.author.includes(key)) {
						results.push(re)
					}					
				})
				options.callback(results);
			}            
		}).catch((error) => {
			console.log('getResultByKeys fail' +error);
		});
	}
    
    getNovelDetail (options) {

    	let param = {} , result = "";

        options.reGet = options.reGet?options.reGet:false;
        param.url = options.type == 1 ? 'girlsColumn.json' : 'boysColumn.json';

		xhr.get(param).then((results) => {
            let list = results.body.list;
			list.map((re,index) =>{	
				if(re.columnId == options.cid){	
				   result = re;
				}				
			})

			if(!result && !options.reGet) { //空 则继续查询另外一个json文件
			   options.type = options.type == 1 ? 0 : 1;
			   options.reGet = true;  //
               this.getNovelDetail(options) 
               return
			}
			if(options.callback && typeof options.callback == 'function' ){
				options.callback(result);
			} 
		}).catch((error) => {
			console.log('getNovelDetail fail' +error);
		});
    }
}
export default new NovelServices()