import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)
const router = new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/Index',
			name: 'index',
			component: () => import('./views/Index.vue')
		},
		{
			path: '/List',
			name: 'list',
			component: () => import('./views/List.vue')
		},
		{
			path: '/detail',
			name: 'detail',
			component: () => import('./views/detail.vue')
		},
		{
			path: '/mine',
			name: 'mine',
			component: () => import('./views/mine.vue')
		}
	]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
	console.log("router")
	console.log("to.name:"+to.name);
	const nextRoute = ['list','detail'] // 需要登录的页面
	let isLogin = sessionStorage.getItem('datas') // 判断是否登录，本地存储有用户数据则视为已经登录
	// 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
	if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
		console.log("nextRoute.indexOf(to.name)" + isLogin);
		if (isLogin == 'false') { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
			console.log("没有登录");
			router.push({
				name: 'login'
			})
		}
	}
	// 已登录状态；当路由到 UserLogIn 时，跳转至 Home
	if (to.name === 'login') {
		if (isLogin) {
			router.push({
				name: 'index'
			});
		}
	}
	next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})
export default router
// export default new Router({
// 	mode: 'history',
// 	base: process.env.BASE_URL,
// 	routes: [{
// 			path: '/',
// 			name: 'login',
// 			component: Login
// 		},
// 		{
// 			path: '/Index',
// 			name: 'index',
// 			// route level code-splitting
// 			// this generates a separate chunk (about.[hash].js) for this route
// 			// which is lazy-loaded when the route is visited.
// 			component: () => import( /* webpackChunkName: "about" */ './views/Index.vue')
// 		}
// 	],
// })
