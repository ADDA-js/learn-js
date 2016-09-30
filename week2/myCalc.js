var add = function(one, two){
	console.log(one);
	console.log(two);
	
	var solution = one + two
	
	return solution;
}

var num1 = parseInt(prompt('Select a number'));
var op = prompt('Select an operation: add, subtract, multiply, divide')
var num2 = parseInt(prompt('Select second number'));
var solution = 0;

if(op == "add"){
  solution = add(num1, num2);
} else if(op == "subtract"){
  solution = num1 - num2;
  console.log(solution);
} else if(op == 'multiply'){
  solution = num1 * num2;
  console.log(solution);
} else if(op == 'divide'){
  solution = num1 / num2;
  console.log(solution);
} else {
  alert("You chose an invalid operation");
}

alert(solution);


















