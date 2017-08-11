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
	}
	getColumnDetail(options){
		let param = {
           url:'columnDetail.json'
           // data:{
           //    columnId:opions.cid,
           //    contentType:opions.ctype
           // }
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
            console.log('getColumnDetail fail');
		};
		
		xhr.get(param);
	}
	getPositionContent(options) {
		let param = {
			url:'positioncontent.json'
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
				options.callback(list);
			}            
		};
		param.fail = (result)=>{
            console.log('positioncontent fail');
		};
		
		xhr.get(param);
	}
}

export default new InfoServices()