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
			url:'/infoColumn',
			data: ''
		};
		
		xhr.post(param).then((result) => {
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
		}).catch((error) => {
			console.log('getNewInfoColumn fail' +error);
		});
	}
	
	getPositionContent(options) {
		let param = {
			url:'/getPositionContent'
		};	
		
		xhr.post(param).then((result) => {            
			if(options.callback && typeof options.callback == 'function' ){				
				options.callback(result);
			}            
		}).catch((error) => {
			console.log('positioncontent fail' +error);
		});
	}

	getComments(options) {
		let param = {
			url: '/getComments',
			data: options.data
		}
        xhr.post(param).then((result) => {           		
			if(options.callback && typeof options.callback == 'function' ){				
				options.callback(result);
			}            
		}).catch((error) => {
			console.log('positioncontent fail' +error);
		});
	}
}

export default new InfoServices()