// 该文件用于创建Vuex中最核心的store
// 引入vuex插件
import Vuex from "vuex";
// 引入Vue
import Vue from "vue";
// 引入count、personList模块
import count from "./count.js";
import personList from "./personList.js";

// 使用vuex插件
Vue.use(Vuex);

// 创建并暴露store,创建Store实例之前必须先使用插件
export default new Vuex.Store({
	modules: {
		count,
		personList,
	},
});
