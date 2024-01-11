Vue.createApp({
data(){
    return{
        todos:[
            {text: 'buy milk',done:true },
            {text: 'buy Food',done:false },
            {text: 'buy eggs',done:false },
            {text: 'buy water',done:false },
            {text: 'buy dreshs',done:false },
        ]
    };
},
methods:{
    compliteTodo(todo){
        todo.done = 'false';
    },
    undoTodo(todo){
        todo.done = 'false';
    },
},
}).mount('#app');