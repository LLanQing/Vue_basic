/* 
  整个项目的入口文件
*/
// 引入Vue
import Vue from "vue";
//引入App组件，App是所有组件的父组件
import App from "./App";
//关闭生产提示
Vue.config.productionTip = false;

/* 
// 完整引入
// 引入element-ui组件库
import ElementUI from "element-ui";
// 引入所有element-ui样式
import "element-ui/lib/theme-chalk/index.css";
// 使用element-ui插件
Vue.use(ElementUI); */

// 按需引入,样式会根据引入的组件自动引入
import { Button, Row, Calendar, DatePicker } from "element-ui";

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Calendar.name, Calendar);
Vue.component(DatePicker.name, DatePicker);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

// 创建Vue实例
const vm = new Vue({
	el: "#app",
	// 将App组件放入容器中
	render: (h) => h(App),
});
