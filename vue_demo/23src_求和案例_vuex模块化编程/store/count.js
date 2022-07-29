// 将Count组件相关的代码封装在count模块中
export default {
	/* 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的
		 ——这样使得多个模块能够对同一 mutation 或 action 作出响应。
		 启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit。 */
	// 开启命名空间
	namespaced: true,
	actions: {
		/* 有一个与组件dispatch发过来的type一样的key,对应的方法去处理事件
	    收到两个参数，context:上下文对象，里面有当前所需要的属性或方法,相当于一个ministore
      value:dispatch传过来的值 */

		addOdd(context, value) {
			console.log("count中的actions中的addOdd执行了");
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
	},
	mutations: {
		//处理action传过来的事件
		ADD(state, value) {
			console.log("mutations中的ADD执行了");
			state.sum += value;
		},

		SUBTRACT(state, value) {
			console.log("mutations中的SUBTRACT执行了");
			state.sum -= value;
		},
	},
	state: {
		sum: 0, //当前的和
		title: "学习vuex",
	},
	getters: {
		//处理state中的数据，将sum放大十倍
		bigSum(state) {
			return state.sum * 10;
		},
	},
};
