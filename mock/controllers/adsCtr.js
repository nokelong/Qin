var ads = require('../model/ads');

const AdsCtr = {
    get: function(callback) {
        
        ads.get((error, ads)=>{
            var results = {
                description: "",
                resultCode: 999,
                body:null
            };

            if(error) {
                results.description = error;
            } else {
                results.resultCode = 0;
                results.body = {
                    list: ads
                }               
            }
            return callback(results);            
        })
    }
}

module.exports = AdsCtr;