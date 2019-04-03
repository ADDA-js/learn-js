# Week 8 - vue.js!

## Getting Started
-Intro to spa/reactivity/vue

## Hello Vue
Make the most basic of vue apps
```HTML
<div id="app">
  <h1>{{message}}</h1>
  <p>{{'adam says ' + message}}</p>
  <pre>{{ $data }}</pre>
</div>
```
Connect to JS.
```Javascript
new Vue({
  el: '#app',
  data: {
    message: 'hello from vue'
  }
});
```

Explain brackets, the double curly brackets are not HTML but scripting code, anything inside mustache tags is called binding expression.

Javascript will evaluate these expressions. The {{ message }} brings up the value of the Javascript variable. This piece of code {{1+2}} will display the number 3.

More info on [templating](https://vuejs.org/v2/guide/syntax.html)

## Two Way Binding
Code out this a simple directive.
```HTML
<div id="app">
  <h1>{{message}}</h1>
  <input v-model="message">
  <pre>{{ $data }}</pre>
</div>
```

Javascript stays the same for now.
```Javascript
new Vue({
  el: '#app',
  data: {
    message: 'hello from vue'
  }
});
```
Directives are prefixed with v- to indicate that they are special attributes provided by Vue.

A directive’s job is to reactively apply side effects to the DOM when the value of its expression changes.

## Conditional rendering
Change the html to this...
```HTML
<h1 v-if="display">{{message}}</h1>
<button v-on:click="toggle">show/hide</button>
```

Add a new key for methods. Change js to this...
```Javascript
new Vue({
  el: '#app',
  data: {
    display: true,
    message: "hello from vue"
  },
  methods: {
    toggle: function(){
      this.display = !this.display;
    }
  }
});
```

Change the button text to this, explain what the ternary operator does.
```HTML
<button v-on:click="toggle">{{display? "hide":"show"}}</button>
```

## Getting Fancy - ToDo List
Create a todo list app with conditional rendering, looping, and reactivity
- start by showing a simple v-for to loop over todos
- next add a done to each of the todo items, set each done to false, except one to to show how it works.
- next make each of the todos clickable, `v-on:click="toggle($event, todo)`, explain that you are passing the event and the todo that was clicked so you can operate on it.
- create a new key value in data that is for holding new todos, `newTodo: ""`
- create an input for the new todos, model to newTodo.
- make a button call an add function that add the newTodo to the todos and then clears out the newTodo
- bug, you can add blank todos, make the button have an if directive, only show if something has been typed in the box.

### Final Code
```HTML
<div id="app" class="wrapper">
  <h1>{{user}}'s Todo List</h1>
  <input type="text" v-model="newTodo">
  <button v-on:click="add" v-if="newTodo">add</button>

  <ol>
    <li v-for="todo in todos" v-on:click="toggle($event, todo)" v-bind:class="{ 'done': todo.done}">{{todo.text}}</li>
  </ol>

  <pre>
  {{$data}}
  </pre>
</div>
```

```Javascript
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
```

## Practice
- create a playlist title in data
- in html display the title from data
- loop through and display the songs.
- if a song is clicked, change playing to true.
- if a song is playing, make it have the class of true.
- only one song can be playing at a time!
- create an input form to create new songs. hint, separate inputs for artists and title.

## Consuming an api
It's a common pattern to get your data from an api and use a spa to consume an api.

I'm going to recreate my last giphy api example from last week using vue instead.

### Process  
- create a var for lookup
- create a var for gifs, make it an empty array
- create a method call get
- create an input box for searching, bind to lookup
- add a button in html to call get on click
- make sure everything is running using debugger;
- add axios to the mix `axios.get(url).then()`
- call debugger inside then, later set gifs to the response data.
- show off.

Final html
```HTML
<body>
  <div id="app" class='wrapper'>
    <header>
      <input type="text" v-model="lookup">
      <button v-if="lookup" v-on:click="get">go</button>
    </header>

    <img v-for="gif in gifs" v-bind:src="gif.images.fixed_height.url">
  </div>
  <script type="text/javascript" src="api.js"></script>
</body>
```

Final Js
```Javascript
//storing our vue instance in a var
var vue = new Vue({
  el: '#app',
  data: {
    lookup: "",
    gifs: []
  },
  methods: {
    get: function(){
    	var url = 'http://api.giphy.com/v1/gifs/search?q=' + this.lookup+ '&api_key=dc6zaTOxFJmzC';
      axios.get(url).then(function (response){
        vue.gifs = response.data.data
        //why not this???
      })
    }
  }
})
```

## Practice 2, time permitting
IMDB clone using vue
- when the user presses the go button,
- set the movie to the response from a omdb api call
- display the pertinent details of the movie.

- Bonus, if the movie received an award, put a start next to the title.
- Super Bonus, add the movie poster, refer to the omdb reference
