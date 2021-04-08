
var app = new Vue(
{
	el: '#root',
	data: {
		emailList: [],
	},
	methods: {

	},
	mounted: function() {

			axios.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then( (risposta)=>{
				this.emailList.push(risposta.data.response);
				// console.log(this.emailList);
			});

	},
}
);
