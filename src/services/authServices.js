import xhr from './xhr/httpClient'

class AuthServices {
    checkLogin (opions) {
    	let param = {
			url: '/checkLogin',
			data: {}
		};	
		console.log('checkLogin')

    	xhr.post(param).then((result) => {
    		// let user = result.body.user; 
            opions.callback(result);
    	}).catch((error) =>{
    		console.log('checkLogin fail ' + error);
    	});
    	
    }
    login (options) {
    	let param = {
    		url: '/login',
    		data: options.data
    	}
     
    	xhr.post(param).then((result) => {         
            if(options.callback && typeof options.callback == 'function' ){  
                options.callback(result);
            }
    	}).catch((error) => {
            console.log('login fail ' + error);
        });
    	
    }

    logout (options) {
    	
        let param = {
    		url: '/logout',
    		data: {}
    	}

    	xhr.post(param).then((result) => {
            if(options.callback && typeof options.callback == 'function' ){ 
                options.callback(result);
            }
    	}).catch((error) => {
            console.log('logout fail ' + error);
        });
    }

    regist(options) {
        let param = {
            url: '/regist',
            data: options.data
        }
        
        xhr.post(param).then((result)=>{
            if(options.callback && typeof options.callback == 'function') {
                options.callback(result);
            }
        }).catch((error)=>{
            console.log('regist fail ' + error);
        });
    }
}
export default new AuthServices();