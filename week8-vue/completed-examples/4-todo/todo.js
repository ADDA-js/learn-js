new Vue({
  el: '#app',
  data: {
    user: "Adam",
    todos: [
      {text: "Write Paper", done: false},
      {text: "Study", done: false},
      {text: "Call Mom", done: false},
      {text: "Hangout", done: true}
    ],
    newTodo: ""
  },
  methods: {
    toggle: function(e, todo){
      todo.done = !todo.done
    }, 
    add: function(){
      this.todos.push({text: this.newTodo, done: false});
      this.newTodo = ""
    }
  }
});
