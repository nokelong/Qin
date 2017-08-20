
import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

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
}

export default new Tips();