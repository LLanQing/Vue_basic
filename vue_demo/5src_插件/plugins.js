/* 
插件：
1. 功能：用于增强 Vue
2. 本质：包含 install 方法的一个对象，install 的第一个参数是 Vue，第二个以后的参数是插件使用者传递的数据。
3. 定义插件：

   ```js
   对象.install = function (Vue, options) {
       // 1. 添加全局过滤器
       Vue.filter(....)
   
       // 2. 添加全局指令
       Vue.directive(....)
   
       // 3. 配置全局混入(合)
       Vue.mixin(....)
   
       // 4. 添加实例方法
       Vue.prototype.$myMethod = function () {...}
       Vue.prototype.$myProperty = xxxx
   }
   ```
4. 使用插件：`Vue.use(plugins)`
 */

export default {
	install(Vue) {
		// 关闭生产提示
		Vue.config.productionTip = false;

		//创建全局混入
		Vue.mixin({
			data() {
				return {
					x: 10,
					y: 1000,
				};
			},
			methods: {
				showName() {
					alert(this.name);
				},
			},
			created() {
				console.log("混入对象的created");
			},
		});

		// 创建全局的自定义指令
		Vue.directive("fbind", {
			// (1)bind：指令与元素成功绑定时调用。
			bind(element, binding) {
				console.log("bind被调用了");
				element.value = binding.value;
			},

			// (2)inserted：指令所在元素被插入页面时调用。
			inserted(element, binding) {
				console.log("inserted被调用了");
				element.focus();
			},

			// (3)update：指令所在模板结构被重新解析时调用。
			update(element, binding) {
				console.log("update被调用了");
				element.value = binding.value;
			},
		});

		//定义全局过滤器：
		Vue.filter("mySlice", (value) => {
			return value.slice(0, 2);
		});

		//给Vue原型对象添加方法
		Vue.prototype.test = function () {
			console.log("Vue.prototype.test被调用了");
		};
	},
};
