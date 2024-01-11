const app = Vue.createApp({
            data(){
                return{
                   
                  firstName:'',
                  lastName:'',
                };
            },
            computed:{
              fullName(){
                return `${this.firstName} ${this.lastName}`
              }
            },
            methods:{},
            });


app.mount('#app');
