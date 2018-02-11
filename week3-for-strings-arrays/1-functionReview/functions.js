// functions for greeting people in different languages
function english(name) {
  return "hello " + name;
}

function spanish(name) {
  return "hola " + name;
}

function german(name) {
  return "guten tag " + name;
}

// This is another function, what is it doing?
function greeting(name, language) {
  return language(name);
}

var name = "adam"

// alert the result of using greeting 
var test1 = greeting(name, english); // will be set to "hello adam"
var test2 = greeting(name, spanish); // will be set to what?
var test3 = greeting(name, german); // will be set to what?

// Greeting is taking two parameters.
// what is the first parameter? What type of data is it?
// what is the second parameter? What type of data is it?

// What is happening here?
