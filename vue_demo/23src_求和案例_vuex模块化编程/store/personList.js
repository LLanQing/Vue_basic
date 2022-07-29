// 引入uuidv4
import { v4 as uuid } from "uuid";
// 引入axios
import axios from "axios";

// 将Person组件相关的代码拆分到personList模块中
export default {
	namespaced: true,
	actions: {
		// 添加人员
		addPerson(context, value) {
			console.log("actions中的addPerson执行了");
			if (!value.trim()) return alert("输入姓名不能为空！");
			context.commit("ADDPERSON", value.trim());
		},

		//从服务器获取并添加人员
		addPersonServer(context) {
			// 通过ajax请求服务器获取用户名称
			axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
				(response) => {
					console.log("请求成功");
					if (!response.data.trim()) return alert("姓名不能为空！");
					context.commit("ADDPERSON", response.data.trim());
				},
				(error) => {
					console.log("请求失败", error.message);
				}
			);
		},
	},
	mutations: {
		// 添加人员
		ADDPERSON(state, value) {
			console.log("mutations中的ADDPERSON执行了");
			const id = uuid();
			state.personList.unshift({ id, name: value });
		},
	},
	state: {
		personList: [{ id: "001", name: "张三" }],
	},
	getters: {},
};
