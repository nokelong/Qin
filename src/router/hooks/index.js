import authInterceptor from './beforeEach/authInterceptor'

export default (router) => {
	
    router.beforeEach((to, from, next) => {
        authInterceptor(to, from, next)
    })
}