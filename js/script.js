
var app = new Vue(
{
	el: '#root',
	data: {
		emailList: [],
		generes:[]
	},
	methods: {

	},
	mounted: function() {

			axios.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then( (risposta)=>{
				this.emailList=(risposta.data.response);
				// console.log(this.emailList);
				this.emailList.forEach((item, i) => {
					if (this.generes.includes(item.generes) == false) {
	item.generes.push(item.generes);
					}

				});

			});

	},
}
);
