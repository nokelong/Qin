import config from './config'
import axios from 'axios'

class xhr {
	get(param){        
        axios.get(param.url,config)
        .then((response)=>{
        	let result = (response.data);
       	    let resultCode = result.resultCode;
            
       	    if(resultCode == 0 ){
               param.success(result);
       	    }else{
               param.fail(result);
               console.log('请求失败');
       	    }
        })
        .catch((error)=>{
            param.fail(error);
        })
	}
	post(param){
        axios.post(param.url,param.data, config)
        .then((response) =>{
        	let result = (response.data);
       	    let resultCode = result.resultCode;

       	    if(resultCode == 0 ){
               param.success(result);
       	    }else{
               param.fail(result);
               console.log('请求失败');
       	    }
        })
        .catch((error)=>{
            param.fail(error);
        });
	}
}

export default new xhr();