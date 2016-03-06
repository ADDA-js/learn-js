alert('working')

// - Create an Array of common greetings in 
// different languages, i.e. "Hola" "Guten Tag" "Ni hao"

var list = ["Hola", "Ni hao", "hey", "what's up"]
// - Create a function called greeting, 
// that when given a name, responds with a randomly choosen greeting from the list. 
// If a greeting chosen, remove it from the list.

var giveGreeting = function() {
	// debugger;
	var index = Math.floor(Math.random() * list.length);
	
	return list[index];
}

var addMessage = function(message) {
	
	list.push(message);
}

// var userName = prompt('what your name?')
// alert(giveGreeting() + " " + userName);

// var newMessage = prompt("Add a greeting");
// addMessage(newMessage);

var students = ['Sarah', 'Molly', 'Dominque', 'Eleanor', 'Shruti', "Cass"];

for(var i = 0; i < students.length; i++){
	alert(giveGreeting() + " " + students[i]);
}

// - Create a function called addMessage, 
// it takes a string and adds it to the list of greetings.
// - Prompt the user for a name, 
// use the greeting function to greet them to your app
// - Prompt the user for a custom greeting, 
// use addMessage to add it to our list.
// - Make sure it all works within the console.