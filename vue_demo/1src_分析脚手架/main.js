/* 
  整个项目的入口文件
*/
// 引入Vue
import Vue from "vue";
//引入App组件，App是所有组件的父组件
/*
	关于不同版本的Vue：

		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

import App from "./App.vue";
// 关闭生产提示
Vue.config.productionTip = false;

// 创建Vue实例
new Vue({
	// 将App组件放入容器中
	render: (h) => h(App),
	/* 
	报错：
	You are using the runtime-only build of Vue where the template compiler is not available. 
		Either pre-compile the templates into render functions,
 		or use the compiler-included build.	

	意思：当前的vue缺少编译templates模板的插件，
	解决方式：1.将模板放到render方法里；2.使用包含编译模板的vue
	*/
	/* 	// components: {
	// 	App,
	// },
	// template: `<App></App>`,
	// render(createElement) {
	// 	return createElement("App");
	// },
	// 简写
	// render: (e) => e(App), */

	// 指定容器
}).$mount("#app");
