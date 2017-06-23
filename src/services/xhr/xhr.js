import cookie from '../../utils/cookie'
import utils from '../../utils/utils'
import tips from '../../utils/tips'


class xhr {

	/**
	 * [getXHR 获取XHR对象]
	 * @return {[type]} [description]
	 */
    getXHR (){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        } else {
            let MSXML = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'Microsoft.XMLHTTP'];
            for(let i = 0;i<MSXML.length; i++){
                try {
                    return new ActiveXObject(MSXML[i]);
                    break;                  
                } catch(e) {}
            }
        }
   	   return new XMLHttpRequest();
    }
    /**
     * [setHeaders 设置头部参数]
     * @param {[type]} xhr    [description]
     * @param {[type]} haders [description]
     */
    setHeaders (xhr,headers){
        for(p in headers){
            xhr.setRequestHeader(p, headers[p]);
        }      
    }
    send (conf){

    	let reqHeaders = conf.headers || {};
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
            sendData = JSON.stringify(cData); //cm2rm
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
        
        let protocol = window.location.protocol;
        let url = protocol + '\/\/' + location.host +conf.url ;
        let sid = cookie.get('Os_SSo_Sid');
        let timeout = conf.timeout ;

        url += '&cguid=' +utils.getCGUID();

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
        debugger;
        let timer = setTimeout(function () {
            if (xhr.readyState == 3 && xhr.status == 200)
                return;
            xhr.abort();
            tips.hideLoading();
            if (conf.showMark)
                tips.hideMark();
            if (navigator.onLine) {
                tips.showTips('请求超时');
            } else {
                tips.showTips('请求超时，网络中断');
            }
            if (conf.fail) {
                conf.fail({ isTimeout: true });
            }

            if (conf.complete) {
                conf.complete();
            }
        }, timeout);
         xhr.onreadystatechange = function (data) {                
            if (xhr.readyState == 4) {
                clearTimeout(timer);
                if (conf.showMark)
                    tips.hideMark();
                if (xhr.status == 304 || (xhr.status >= 200 && xhr.status < 300)) {
                    if (conf.showLoading !== false) {
                        tips.hideLoading();
                    }
                    let para = {
                        xhr: xhr,                  
                        isJSON: conf.isJSON
                    };
                    let info = utils.getResponseInfo(para);
                   
                    if (conf.success)
                        conf.success(info.responseText, info.json);                   
                } else {
                    tips.hideLoading();                  
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
            tips.hideLoading();
        };

        if (conf.showLoading !== false){
            tips.showLoading(); //默认显示loading
        }
            
        if (conf.showMark){
            tips.showMark();
        }
            
        xhr.send(sendData);
        return xhr;        
    }
}
export default new xhr();