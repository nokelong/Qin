import {getCGUID} from './util'

class xhr {
    const AJAXTIMEOUT =  60000;
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
        
        if(conf.url.indexOf('?') == -1) {
            conf.url += '?';
        }
        
        let protocol = location.href.protocol;
        let url = protocol + '\/\/' + location.host +conf.url ;
        let sid = T.cookie.get('Os_SSo_Sid');
        let timeout = conf.timeout || AJAXTimeout;

        url += '&cguid=' +getCGUID;

        if(sid) {
            if(!url.match('/sid=([^$#]+)/')){
                url += '&sid=' + sid;
            }else{
                let tempUrl = url.toString();
                let re = eval('/(sid=)([^&]*)/gi');
                url = tempUrl.replace(re,'sid'+'='+sid);
            }
        }
        xhr.open(conf.method, url, true);
        this.setHeaders(xhr, reqHeaders);
        
        let timer = setTimeout(function () {
            if (xhr.readyState == 3 && xhr.status == 200)
                return;
            xhr.abort();
            T.utils.hideLoading();
            if (conf.showMark)
                T.utils.hideMark();
            if (navigator.onLine) {
                T.Tip.showTips(GlobalMessage.Timeout);
            } else {
                T.Tip.showTips(GlobalMessage.OffLine);
            }
            if (conf.fail) {
                conf.fail({ isTimeout: true });
            }

            if (conf.complete) {
                conf.complete();
            }
        }, timeout);
         xhr.onreadystatechange = function (data) {                
            if (xhr.readyState == 4 && xhr.status != 0) {
                clearTimeout(timer);
                if (conf.showMark)
                    T.utils.hideMark();
                if (xhr.status == 304 || (xhr.status >= 200 && xhr.status < 300)) {
                    if (conf.showLoading !== false) {
                        T.utils.hideLoading();
                    }
                    let para = {
                        xhr: xhr,                  
                        isJSON: conf.isJSON
                    };
                    let info = T.ajax.utils.getResponseInfo(para);

                    //提示服务器公告
                    T.serviceTips(info.json);
                    if (conf.success)
                        conf.success(info.responseText, info.json, info.isMDACache);
                    if (conf.cache && conf.cache.callback)
                        conf.cache.callback(info);
                } else {
                    T.utils.hideLoading();
                    if (!conf.hideDefaultTip) {
                        T.Tip.showTips(GlobalMessage.ServerError);
                    }
                    if (conf.fail) {
                        conf.fail(xhr.responseText, xhr.status);
                    }
                }
                if (conf.complete) {
                    conf.complete();
                }
            }
        };
        xhr.onerror = function () {
            clearTimeout(timer);
            if (conf.fail) {
                conf.fail("http 请求错误");
            }
            if (conf.complete) {
                conf.complete();
            }
        };
        xhr.onabort = function () {
            T.utils.hideLoading();
        };

        if (conf.showLoading !== false){
            T.utils.showLoading(); //默认显示loading
        }
            
        if (conf.showMark){
            T.utils.showMark();
        }
            
        xhr.send(sendData);
        return xhr;        
    }

}
export default xhr