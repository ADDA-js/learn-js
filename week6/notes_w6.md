# Week 6 - JS

## Objectives
- I can celebrate the success of building my first app.
- I can understand when and how to use jQuery.

## Do Now

## Mini-Lesson - jQuery

### Targeting
```javascript
var parent = $("#about").parent();

var parent = document.getElementById("about").parentNode;
```

### Creating
```javascript
var newDiv = $("<div>");

var newDiv = document.createElement("div");

$("body").append($("<p>"));

document.body.appendChild(document.createElement("p"));
```

Click Events
```javascript
$("a").click(function() {
  // code
})

var links = document.getElementsByTagName("a")
links.addEventListener('click', function(){
	// code
})
```

### when and how
When you might need jQuery
- For small projects where perfomance is not a big issue
- Simple projects with a tight deadline
- When you use a front-end library that has jQuery as a depedency.

When you might not need jQuery
- Acquiring an intermediate - advanced understanding of JS
- Working on complex web applications
- Building you own library or framework
-Server side applications with Node.js

### Iteration
### Events
### 