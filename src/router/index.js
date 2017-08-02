import Vue from 'vue'
import Router from 'vue-router'
import index from 'VIEWS/index'
import noveldetail from 'VIEWS/noveldetail/noveldetail'
import novelcatalog from 'VIEWS/novelcatalog/novelcatalog'

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
    },{
      path:'/novelcatalog',
      name:'novelcatalog',
      component:novelcatalog
    }
  ]
})
