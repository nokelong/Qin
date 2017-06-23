class Tips {
    showMark (options) {

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
            window['__markDiv'].className += ' iMark';
            window['__markDiv'].style.zIndex = zIndex;
                 
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
        window['__markDiv'].style.display = '';       
      
        // if (options.__selfMark) {
        //     let markNode = window[options.markName || "__selfMark"] = window['__markDiv'];
        //     delete window['__markDiv'];

        //     //窗口变动的时候重置mark的宽高。
        //     let resizeMark = () => {
        //         T.dom.setStyle(markNode.querySelector(".localMask"), {
        //             width: document.body.scrollWidth + 'px',
        //             height: document.body.scrollHeight + 'px'
        //         });
        //     };
        //     T.event.bind(window, 'resize', resizeMark);
        //     T.event.bind(window, 'scroll', resizeMark);
        //     T.event.bind(window, 'orientationchange', resizeMark);
        // }
    }

    hideMark (markName) {
        if (markName) {
            window['__markDiv'] = window[markName];
        }
        if (window['__markDiv']) {      
            $(window['__markDiv']).remove();
            window['__markDiv'] = null;     
        }
    }

    showLoading (options) {
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
        $(div).click = options.click || null;
        $(div).css('display','');
        // div.onclick = options.click || null;
        // T.dom.setStyle(div, { display: "" });
    }
    hideLoading () {
        if(this.ldDiv) {
          this.ldDiv.style.display = "none";
        }        
        this.hideMark();
    }

    showTips (options) {
        this.tip(options, "wf-shortErrow");
    }

    tip (options, iClass) {
        if (!options)
            return;
        if (typeof options === "string") {
            options = { msg: options };
        } else {
            if (!options.msg)
                return;
        }
        var html = ['<div class="NovelShelfAdd blackTip layout_av" style="">',
                     '<span>',
                        '<i class="{iClass}"></i><span class="tip_msg">{msg}</span>',
                     '</span>',
                    '</div>'].join("");

        var tips = document.querySelector("#someTips");
        if (!tips) {
            tips = document.createElement("article");
            tips.id = "someTips";
            tips.className = "shortPop ";
            tips.style.zIndex = "99";
            tips.innerHTML = T.text.format(html, { iClass: iClass ? ('iconfont mr_5 '+iClass): "", msg: options.isHtml ? options.msg : T.text.htmlEncode(options.msg) });
            document.body.appendChild(tips);
            tips.querySelector("div").style.top = "50%"; 
            tips.querySelector("div").style.left = "50%"; 
            tips.querySelector("div").style.width = options.width||"";
           
            if(options.msg.length<17){   //一行
                 tips.querySelector("div").style.marginLeft = -(options.msg.length*12+20)/2+"px";
            }else{
                 tips.querySelector("div").style.marginLeft = -tips.querySelector("div").offsetWidth/2+"px";
            }
        } else {
            
            tips.querySelector("i").className = iClass ? ('iconfont mr_5 '+iClass):" "
            tips.querySelector(".tip_msg").innerHTML = options.isHtml ? options.msg : T.text.htmlEncode(options.msg);
            T.dom.removeClass(tips, "dHide");
            if(options.msg.length<17){
                 tips.querySelector("div").style.marginLeft = -(options.msg.length*12+20)/2+"px";
            }else{
                 tips.querySelector("div").style.marginLeft = -tips.querySelector("div").offsetWidth/2+"px";
            }
            tips.querySelector("div").style.top = "50%"; 
            tips.querySelector("div").style.left = "50%"; 
            tips.querySelector("div").style.width = options.width||"";
        }
        setTimeout(function () {
            $(tips).addClass('dHide');           
        }, options.showTime || 1000);
    }
}

export default new Tips();

