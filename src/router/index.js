import Vue from 'vue'
import Router from 'vue-router'
import index from 'VIEWS/index'
import noveldetail from 'VIEWS/noveldetail/noveldetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
    	path:'/noveldetail',
    	name:'noveldetail',
    	component:noveldetail
    }
  ]
})
