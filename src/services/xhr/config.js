class xhr {
	/**
	 * [getXHR 获取XHR对象]
	 * @return {[type]} [description]
	 */
    getXHR (){
   	   return new XMLHttpRequest();
    }
    /**
     * [setHeaders 设置头部参数]
     * @param {[type]} xhr    [description]
     * @param {[type]} haders [description]
     */
    setHeaders (xhr,haders){
      for(p in haders){
     	xhr.setRequestHeader(p,haders[p])
      }
    }
    send (conf){

    	let requestHeaders = conf.headers || {};
    	let xhr = this.getXHR();
        let sendData = null;
        let method = conf.method.toLowerCase;
        let cData = conf.data;

        if(method === 'get' && conf.url.indexOf('/setting/') > -1){
        	method = 'post';
        	conf.method = 'POST';
        	cData = {};
        }

        if(conf.dataType == 'xml' && typeof cData == 'object') {
            if (true) {
                sendData = JSON.stringify(cData); //cm2rm
            } else {
                sendData = T.json2xml(cData);
            }
            reqHeaders['Content-Type'] = 'application/xml';
        }else if(typeof cData == 'object') {
            let temArr = [];
            
            for (var p in data) {
                temArr.push(p + "=" + encodeURIComponent(data[p]));
            }
            if(method == 'get') {
            	if(conf.url.indexOf('?') == -1){
            		conf.url += '?';
            	}
            	conf.url += temArr.join('&');
            } else {
            	sendData = temArr.join('&');
            }
        }else if(typeof cData == 'string') {
        	sendData = cData;
        }

    }

}
export default xhr