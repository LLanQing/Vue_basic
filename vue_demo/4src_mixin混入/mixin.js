export default {
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
};
