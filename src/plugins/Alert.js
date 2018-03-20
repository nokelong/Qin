var Alert = {}
Alert.install = function (vue, options) {
	vue.prototype.$Alert = function (message, type) {

        let AlertComponent = Vue.extend({ //创建Vue组件
        	template: '<div class="PopSquare blackTip layout_av" style="margin-left:-57px;" id="TAlert">
			<i class="icon i-popRight"> </i></br>'+message+'</div>'})
        let tmpl = new AlertComponent().$mount().$el; //获取组件挂载的元素
        document.body.appendChild(tmpl);        
	}

	vue.prototype.$Alert.show = (options) => {
	}
}
export default Alert;