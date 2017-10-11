import Vue from 'vue'
import { ToastPlugin , LoadingPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

class Tips {
    /**
     * [showTips 提示]
     * @param  {[type]} options [参数对象]
     * @param  {[type]} options.type [提示类型 text cancel warn success 默认text]    
     * @param  {[type]} options.msg [提示语]
     * @param  {[type]} options.showTime [提示显示时间  默认1秒]
     * @return {[type]}         [description]
     */
    showTips (options) {     
        this.tip(options,options.type)
    }

    tip (options, type) {
        if (!options)
            return;
        if (typeof options === "string") {
            options = { msg: options };
        } else {
            if (!options.msg)
                return;
        }
       
        Vue.$vux.toast.show({
            text:options.msg,
            type:type
        })
        setTimeout(function () {
            Vue.$vux.toast.hide()         
        }, options.showTime || 1000);
    }

    showLoading (showTime=6000) {
        Vue.$vux.loading.show();
        this.hideLoading(showTime);
    }

    hideLoading (showTime=100) {
        setTimeout(function () {
            Vue.$vux.loading.hide()         
        }, showTime);  
    }
}

export default new Tips();