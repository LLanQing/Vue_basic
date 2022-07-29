// 该文件用于创建Vuex中最核心的store
// 引入vuex插件
import Vuex from "vuex";
// 引入Vue
import Vue from "vue";
// 使用vuex插件
Vue.use(Vuex);

//准备actions——用于响应组件中的动作,处理业务逻辑、ajax请求等
const actions = {
	/* 有一个与组件dispatch发过来的type一样的key,对应的方法去处理事件
	    收到两个参数，context:上下文对象，里面有当前所需要的属性或方法,相当于一个ministore
      value:dispatch传过来的值 */
	/* add(context, value) {
		console.log("actions中的add执行了");
		// 将事件提交给mutations处理，和组件传过来的标识不一样以区分actions和mutations，
    //   并将组件传过来的值传给mutations
		context.commit("ADD", value);
	},

	subtract(context, value) {
		console.log("actions中的subtract执行了");
		context.commit("SUBTRACT", value);
	}, */

	addOdd(context, value) {
		console.log("actions中的addOdd执行了");
		if (context.state.sum % 2) {
			context.commit("ADD", value);
		}
	},

	addWait(context, value) {
		console.log("actions中的addWait执行了");
		setTimeout(() => {
			context.commit("ADD", value);
		}, 1000);
	},
};

//准备mutations——用于操作数据（state）
const mutations = {
	//处理action传过来的事件
	ADD(state, value) {
		console.log("mutations中的ADD执行了");
		state.sum += value;
	},

	SUBTRACT(state, value) {
		console.log("mutations中的SUBTRACT执行了");
		state.sum -= value;
	},
};

// 准备state——用于存储数据
const state = {
	sum: 0, //当前的和
	title: "学习vuex",
};

// 当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工。
//类似于computed
const getters = {
	//处理state中的数据，将sum放大十倍
	bigSum(state) {
		return state.sum * 10;
	},
};

// 创建并暴露store,创建Store实例之前必须先使用插件
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters,
});
