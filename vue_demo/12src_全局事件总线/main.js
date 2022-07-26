/* 
  整个项目的入口文件
*/
// 引入Vue
import Vue from "vue";
//引入App组件，App是所有组件的父组件
import App from "./App";

//关闭生产提示
Vue.config.productionTip = false;

/* 实现任意组件间通信的事件总线的要求：
	1.所有的组件都能使用，
	2.上面有$on,$off,$emit方法
	 */

/* // 这样可以实现事件总线，但是比较麻烦
const VC = Vue.extend({}); //创建一个VueComponent构造函数
const vc = new VC(); //创建一个vc
Vue.prototype.bus = vc; //将vc添加到Vue的原型对象上当做事件总线 */

// 创建Vue实例
new Vue({
	el: "#app",
	// 将App组件放入容器中
	render: (h) => h(App),

	beforeCreate() {
		Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
	},
});
