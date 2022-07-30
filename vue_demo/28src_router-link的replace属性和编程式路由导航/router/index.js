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
export default new VueRouter({
	routes: [
		{
			path: "/about",
			// 注意：component不能加s，否则会报错：vue-router.esm.js?4713:16 [vue-router] Failed to resolve async component render: TypeError: Cannot read properties of undefined (reading '_self')
			// 后面的组件不能加{},否则会报错：Failed to mount component: template or render function not defined
			component: About,
		},
		{
			path: "/home",
			component: Home,
			// 多级路由中的子路由使用children属性写在对应的一级路由中
			children: [
				{
					// 注意path不能带/，VueRouter已经自动加上了/,或者写完整路径/home/messages
					path: "/home/messages", //此处一定不要写：/message
					component: Messages,
					children: [
						{
							// 使用name配置命名路由可以简化路由的跳转。
							name: "detail",
							path: "detail", //使用占位符声明接收params参数
							component: Detail,

							//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
							// props: { a: 900 },

							//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
							// props: true,

							//第三种写法：props值为函数,会接受到一个参数$route，该函数返回的对象中每一组key-value都会通过props传给Detail组件
							props($route) {
								return {
									id: $route.query.id,
									title: $route.query.title,
								};
							},
						},
					],
				},
				{
					path: "news", //此处一定不要写：/news
					component: News,
				},
			],
		},
	],
});
