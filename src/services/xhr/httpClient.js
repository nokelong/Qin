import config from './config'
import axios  from 'axios'
import qs     from 'qs'
// const promise = new Promise()
class xhr {
	get(param) {
    const promise = axios.get(param.url,config)
        .then((response)=>{
            let result = (response.data);
     	      let resultCode = result.resultCode;
     	      if(resultCode == 0 ){
              // param.success(result);
                return Promise.resolve(result)
     	      }else{
              // param.fail(result);
                console.log('请求失败');
                return Promise.reject(result)              
     	      }
        }).catch((error)=>{
            console.log(error);            
            return Promise.reject(error)            
        })

    return promise;
	}

	post(param){     
      axios.post(param.url, qs.stringify({recId:100}), config).then(function(response) {
          alert(response.data);
      }).catch(function(error) {
          alert(error);
      });

      // axios.post(param.url, qs.stringify(param.data), config)
      // .then((response) =>{
      //     let result = (response.data);
     	//     let resultCode = result.resultCode;

      //  	  if(resultCode == 0 ){
      //         return Promise.resolve(result)
      //  	  } else {
      //         console.log('请求失败');
      //         return Promise.reject(result);              
      //  	  }
      // }).catch((error)=>{
      //     console.log(error);
      //     return Promise.reject(error)
      // });

      // return promise;
	}
}

export default new xhr();