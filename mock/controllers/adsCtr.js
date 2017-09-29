var ads = require('../model/ads');

const AdsCtr = {
    get: function(callback) {
    	
        ads.get((error, ads)=>{
            var results = {};
            
            if(error) {
	            results = { 
	            	description: error,
	            	resultCode: 999,
	            	body:null
		        };
	        } else {
	        	results = {
	        		description: 'getPositionContent success',
	        		resultCode: 0,
	                body:{
	                	list: ads
	                }
	        	};
	        }
	        callback(results);
	    })
    }
}

module.exports = AdsCtr;