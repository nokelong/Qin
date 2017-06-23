import call from './xhr/httpClient'

class NovelServices {
	getRecommendColumn (){
		let options = {
			url:'RecommendColumn.json'
		};
		options.success = (result) =>{
            console.log(JSON.stringify(result));
		};
		options.fail = (result)=>{
            console.log('getRecommendColumn fail');
		};
		
		call(options);
	}
}

export default new NovelServices()