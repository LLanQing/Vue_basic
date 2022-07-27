/* 
  整个项目的入口文件
*/
// 引入Vue
import Vue from "vue";
//引入App组件，App是所有组件的父组件
import App from "./App";

//关闭生产提示
Vue.config.productionTip = false;

// 创建Vue实例
new Vue({
	el: "#app",
	// 将App组件放入容器中
	render: (h) => h(App),

	/* 	beforeCreate() {
		Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
	}, */
});
