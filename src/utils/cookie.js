class Cookie {
  /**
    * 设置 cookie
    * @param {String} name 名称
    * @param {String} value 值
    * @param {Date} expires 过期时间
    * @param {String} path 目录
    * @param {String} domain 域
    * @param {String} secure 安全标志
    */
	set (name, value, expires, path, domain, secure) {
		let text = encodeURIComponent(name) + '=' + encodeURIComponent(value);

		if(expires instanceof Date) {
			text += ';expires=' + expires.toGMTString();
		}

		if(domain) {
			text += ';domain=' + domain;
		}

		if(secure) {
			text += ';secure';
		}

		document.cookie = text;
	}
	/**
	 * [get 取cookie]
	 * @param  {[type]} name [cookie key]
	 * @return {[type]}      [description]
	 */
	get (name) {

		let cookie = document.cookie;
		let cookieName = encodeURIComponent(name) + '=';
		let start = cookie.indexOf(cookieName), value = null;

	  if (start > -1) {
            var cookieEnd = document.cookie.indexOf(';', start);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            value = decodeURIComponent(document.cookie.substring(start + cookieName.length, cookieEnd));
        }

        return value;
	}
	/**
	 * [unset  删除cookie]
	 * @param  {[type]} name   [cookie名字]
	 * @param  {[type]} path   [路径]
	 * @param  {[type]} domain [域名]
	 * @param  {[type]} secure [安全标志]
	 * @return {[type]}        [description]
	 */
	unset (name, path, domain, secure) {
		this.set(name, '', new Date(0), path, domain, secure)
	}
}
export default new Cookie();