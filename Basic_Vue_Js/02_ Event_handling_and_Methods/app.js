Vue.createApp({
data(){
    return{
        count: 1,
    };
},
methods:{
    incrimentNumber(){
        this.count ++;
    }
}
}).mount('#app');