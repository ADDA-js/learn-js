// //array.js

// var animals = ['parrot', 'elephant', 'mantee', 'pig']

// // console.log(animals.length);
// // console.log(animals[1]);
// // //this is how we get the last element in an array
// // console.log(animals[animals.length-1]); 
// // console.log("index of pig " + animals.indexOf("pig"));


// // var search = "bear";

// // if(animals.indexOf(search) == -1){
// // 	console.log(search + ' is not in the list');
// // } 

// //adding values from the array
// console.log(animals);
// animals.push('bear'); //add bear to the end
// console.log(animals);
// animals.unshift(3); //add 3 to the beginning
// console.log(animals);

// // removing values from the array
// animals.pop(); //opposite of push, remove the end
// console.log(animals);
// animals.shift(); //opposit of unshift, remove the first
// console.log(animals);

// // replace a value
// animals[3] = 'lion';
// console.log(animals);

// string and arrays together
var college = "Barnard";
var fundraiser = "bold beautiful Barnard"
// empty quotes will split into letters
var letters = college.split(""); 
//splits into the words at space
var slogan = fundraiser.split(" "); 
console.log(letters);
console.log(slogan);

var indexN = letters.indexOf('n');
console.log(indexN);

letters.splice(1, 2)
console.log(letters)




























