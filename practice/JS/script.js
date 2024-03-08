const student = {
	name: "rahul",
	marks: 99,
	prop: this,
	getName : function () {
		console.log(this);
		return this.name;
	},
	getMarks: () => {
		console.log(this);
		return this.marks;
	},
	getInfo1 : function () {
		setTimeout(() => {
			console.log(this);
		});
	},
	getInfo2 : function () {
		setTimeout( function () {
			console.log(this);
		});
	},
}