/* 
  整个项目的入口文件
*/
// 引入Vue
import Vue from "vue";
//引入App组件，App是所有组件的父组件
import App from "./App";
// 引入vue-router
import VueRouter from "vue-router";

// 引入router,路径不写全，默认引入文件夹下的index文件
import router from "./router";

//关闭生产提示
Vue.config.productionTip = false;
//使用vue-router插件
Vue.use(VueRouter);

// console.log(router);
// 创建Vue实例
const vm = new Vue({
	el: "#app",
	// 将App组件放入容器中
	render: (h) => h(App),
	router,
	// beforeCreate() {
	// 	Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
	// },
});

// console.log(vm.$route);
// console.log(vm.$router);
// console.log(vm);
