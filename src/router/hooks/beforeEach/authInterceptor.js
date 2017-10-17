import authServices from 'SERVICES/authServices'

// 权限拦截
const authInterceptor = (to, from, next ) =>{ 
    // console.log(to.path + "------" +from.path) 
    if (to.matched.some(record => record.meta.requiresAuth)) {

        let options = {};
        options.callback = (result)=>{
            if(result.resultCode == 0) {  //已登录
                next()
            } else {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                })
            }
        };
        authServices.checkLogin(options)       
    } else {
        next()
    }
}

export default authInterceptor
