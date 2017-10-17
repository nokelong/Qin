import Vue from 'vue'
import Router from 'vue-router'
import routesMap from './map/' // 路由映射
import index from 'VIEWS/index'
import hooks from './hooks/' // 路由钩子

Vue.use(Router)

const router = new Router({
    routes: [
	    {
	      path: '/',
	      name: 'index',
	      component: index
	    },
        ...routesMap
    ]
})

hooks(router);

export default router;

