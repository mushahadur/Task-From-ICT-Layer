const app = Vue.createApp({
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
            });
    app.component('todo',{
        data(){
            return{};
        },
        methods:{},
        template:`
        <table class="table mb-4">
        <thead>
          <tr>
            <th scope="col">Todo item</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" >
            <td>{{ todo.text }}</td>
            <td>
              <button 
              v-if="!todo.done" 
              @click="compliteTodo(todo)" 
              type="submit" 
              class="btn btn-success ms-1">Done</button>
              <button 
              v-else 
              type="submit"
              @click="undoTodo(todo)" 
               class="btn btn-danger">Not Done</button>
            </td>
          </tr>
          
        </tbody>
      </table>
        `,
    });

app.mount('#app');
