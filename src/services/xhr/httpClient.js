import config from './config'
import axios from 'axios'

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
              return Promise.reject(result)
              console.log('请求失败');
     	      }
        }).catch((error)=>{
            console.log(error);
        })

    return promise;
	}

	post(param){
    const promise = axios.post(param.url,param.data, config)
        .then((response) =>{
      	    let result = (response.data);
     	      let resultCode = result.resultCode;

     	      if(resultCode == 0 ){
              return Promise.resolve(result)
     	      } else {
              return Promise.reject(result)
              console.log('请求失败');
     	      }
      }).catch((error)=>{
          console.log(error);
      });

      return promise;
	}
}

export default new xhr();