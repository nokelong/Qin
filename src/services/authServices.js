import xhr from './xhr/httpClient'

class AuthServices {
    checkLogin (callback) {
    	let param = {
			url: '/checkLogin',
			data: {}
		};	
		console.log('checkLogin')

    	xhr.post(param).then((result) => {
    		let user = result.body.user; 
            callback(user);
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
            
    	});
    	console.log('login')
    }
    logout (options) {
    	let param = {
    		url: '/logout',
    		data: options.data
    	}

    	xhr.pos(param).then((result) => {

    	});
    }
}
export default new AuthServices();