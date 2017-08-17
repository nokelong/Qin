import Vue from 'vue'
import Router from 'vue-router'
import index from 'VIEWS/index'
import noveldetail from 'VIEWS/noveldetail/index'
import novelcatalog from 'VIEWS/novelcatalog/index'
import search       from  'VIEWS/search/index'

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
    },{
      path:'/search',
      name:'search',
      component:search
    }
  ]
})
