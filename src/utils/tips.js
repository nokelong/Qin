
import Vue from 'vue'
import { ToastPlugin , LoadingPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

class Tips {

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

    showLoading () {
        Vue.$vux.loading.show()
    }

    hideLoading (showTime=100) {
        setTimeout(function () {
            Vue.$vux.loading.hide()         
        }, showTime);  
    }
}

export default new Tips();