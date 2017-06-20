

export const showMark = (options) => {
    
    if (typeof options === "string") {
        options = { msg: options };
    }
    options = options || {};

    if (!window['__markDiv']) {
    	window['__markDiv'] = document.createElement("article");

    	let bgCss = '',zIndex = 999;
        let panel = document.querySelector("div.iSelectPanel");

        if (panel) {
            zIndex = parseInt(panel.style.zIndex) + 20;
        }
        if (options.zIndex) {
            zIndex = options.zIndex;
        }
        if (options.background) {
            bgCss = "background:" + options.background + ";";
        }
        window['__markDiv'].innerHTML = '<div class="localMask" style="z-index:' + zIndex + ';' + bgCss + 'height:' + document.body.scrollHeight + 'px;width:' + document.body.scrollWidth + 'px;"></div>';
        $(window['__markDiv']).addClass('iMark');
        $(window['__markDiv']).css('zIndex',zIndex);        
        document.body.appendChild(window['__markDiv']);
    } else {
        if (options.background) {
            window['__markDiv'].querySelector(".localMask").style.background = options.background;
        } else {
            window['__markDiv'].querySelector(".localMask").style.background = "";
        }
    }

    //绑定事件
    window['__markDiv'].onclick = options.click || null;
    $(window['__markDiv').css('display','');
    T.dom.setStyle(window['__markDiv'], { display: "" });

     if (options.__selfMark) {
        let markNode = window[options.markName || "__selfMark"] = window['__markDiv'];
        delete window['__markDiv'];

        //窗口变动的时候重置mark的宽高。
        let resizeMark = () => {
            T.dom.setStyle(markNode.querySelector(".localMask"), {
                width: document.body.scrollWidth + 'px',
                height: document.body.scrollHeight + 'px'
            });
        };
        T.event.bind(window, 'resize', resizeMark);
        T.event.bind(window, 'scroll', resizeMark);
        T.event.bind(window, 'orientationchange', resizeMark);
    }
}
export const hideMark = (markName) =>{
    if (markName) {
        window['__markDiv'] = window[markName];
    }
    if (window['__markDiv']) {      
        $(window['__markDiv']).remove();
        window['__markDiv'] = null;     
    }
}
export const showLoading = (options) => {
    if (typeof options === "string") {
        options = { msg: options };
    }
    options = options || {};
    if (options.withMark) {
        this.showMark();
    }
    var div = this.ldDiv;
    options.msg = options.msg || "处理中";
    if (!div) {
        div = this.ldDiv = document.createElement("article");
        div.className = "shortPop dialogCenter";
        div.innerHTML = '<div class="ta_c"><i class="loadingIco"></i><p>加载中...</p></div>';
        document.body.appendChild(div);
    }
    if (options.msg) {
        try  {
            div.querySelector("p").innerHTML = T.text.htmlEncode(options.msg);
        } catch (e) {}
    }
    //绑定事件
    div.onclick = options.click || null;
    T.dom.setStyle(div, { display: "" });
}
export const hideLoading = () =>{
    if(this.ldDiv) {
      this.ldDiv.style.display = "none";
    }        
    this.hideMark();
}

export const showTips = (options) =>{
    T.Tip.tip(options, "wf-shortErrow");
}

export const getResponseInfo = (conf) =>{
    let xhr = conf.xhr;
    let json;
    let responseText = xhr.responseText;
    let resHeaders = T.ajax.utils.getHeaders(xhr);

    //序列化json
    let isJSON = conf.isJSON || /json|javascript/i.test(resHeaders["Content-Type"]) || xhr.responseText.indexOf("{") == 0;
    if (isJSON) {
        json = T.tryEval(responseText);
    }
    return { responseText,json};
}