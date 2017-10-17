import login      from 'VIEWS/login'
import usercenter from 'VIEWS/usercenter'
import regist     from 'VIEWS/regist'

const userRoutes = [
    {
    	name: 'login',
    	path: '/login',
    	component:login
    },{
        name: 'usercenter',
        path: '/usercenter',
        component: usercenter,
        meta: { requiresAuth: true }
    },{
    	name: 'regist',
        path: '/regist',
        component: regist
    }
]

export default userRoutes;