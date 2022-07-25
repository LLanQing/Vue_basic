//入口文件
import App from "./App.vue";

//创建Vue实例来管理App组件
new Vue({
	el: "#root",
	data: {
		msg: "Vue组件化编程",
	},
	//注册App组件
	components: {
		App,
	},
	//配置模板
	template: `<App></App>`,
});
