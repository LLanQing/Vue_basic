// 引入vue-router
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import News from "../pages/News";
import Detail from "../pages/Detail";

// 1. 路由组件通常存放在`pages`文件夹，一般组件通常存放在`components`文件夹。
// 2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
// 3. 每个组件都有自己的`$route`属性，里面存储着自己的路由信息。
// 4. 整个应用只有一个 router，可以通过组件的`$router`属性获取到。

// 创建并暴露VueRouter实例
const router = new VueRouter({
	//mode配置路由工作模式，其值有两个：'hash'、'history'，默认是hash模式
	mode: "history",
	routes: [
		{
			name: "about",
			path: "/about",
			// 注意：component不能加s，否则会报错：vue-router.esm.js?4713:16 [vue-router] Failed to resolve async component render: TypeError: Cannot read properties of undefined (reading '_self')
			// 后面的组件不能加{},否则会报错：Failed to mount component: template or render function not defined
			component: About,
			meta: { title: "关于" },
		},
		{
			name: "home",
			path: "/home",
			component: Home,
			meta: { title: "主页" },
			// 多级路由中的子路由使用children属性写在对应的一级路由中
			children: [
				{
					// 注意path不能带/，VueRouter已经自动加上了/,或者写完整路径/home/messages
					name: "messages",
					path: "/home/messages", //此处一定不要写：/message
					component: Messages,
					meta: { requireAuth: true, title: "消息" }, //meta配置中的属性提供给router使用，添加需要路由守卫认证
					children: [
						{
							// 使用name配置命名路由可以简化路由的跳转。
							name: "detail",
							path: "detail", //使用占位符声明接收params参数
							component: Detail,
							//第三种写法：props值为函数,会接受到一个参数$route，该函数返回的对象中每一组key-value都会通过props传给Detail组件
							props($route) {
								return {
									id: $route.query.id,
									title: $route.query.title,
								};
							},
						},
					],

					// 独享守卫(局部守卫),只针对某一个路由规则控制权限的路由守卫
					/* beforeEnter(to, from, next) {
						if (to.meta.requireAuth) {
							if (localStorage.getItem("userId") === "vue") {
								//模拟用户登录了，用户id为vue才会跳转，否定则提示用户去登录
								next(); //放行
							} else {
								alert("未登录，请先登录");
							}
						} else {
							// 其他组件不控制直接放行
							next();
						}
					}, */
				},
				{
					path: "news", //此处一定不要写：/news
					component: News,
					meta: { requireAuth: true, title: "新闻" }, //添加需要路由守卫认证
				},
			],
		},
	],
});

/* // 路由守卫：对路由进行权限控制
// 全局守卫:
//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
	// console.log("beforeEach",to,from);	//to, from都是包含有一些路由属性比如；path,meta,params,query等的Object对象
	// 当访问News和Messages控制权限，其他组件不控制
	// if (to.path === "/home/messages" || to.path === "/home/news") {
	// 使用路径来作为判断条件不适合，当需要控制的组件多的时候，太过复杂，
	// 所以使用meta属性，在各自组件的路由规则添加一个boolean属性用来判断是否需要控制权限
	if (to.meta.requireAuth) {
		if (localStorage.getItem("userId") === "vue") {
			//模拟用户登录了，用户id为vue才会跳转，否定则提示用户去登录
			next(); //放行
		} else {
			alert("未登录，请先登录");
		}
	} else {
		// 其他组件不控制直接放行
		next();
	}
}); */

//全局后置守卫：初始化时执行、每次路由切换后执行
// 当有需求，需要跳转路由之后操作，比如更换网页标题，就需要后置
router.afterEach((to, from) => {
	console.log("afterEach", to, from);
	if (to.meta.title) {
		document.title = to.meta.title;
	} else {
		document.title = "vue_demo";
	}
});

export default router;
