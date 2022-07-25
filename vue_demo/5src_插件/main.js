/* 
  整个项目的入口文件
*/
// 引入Vue
import Vue from "vue";
//引入App组件，App是所有组件的父组件
import App from "./App.vue";
//引入插件
import plugins from "./plugins.js";

// 使用插件,插件必须在创建Vue实例之前使用
Vue.use(plugins);

// 创建Vue实例
new Vue({
	el: "#app",

	// 将App组件放入容器中
	render: (h) => h(App),

	// 指定容器
});
