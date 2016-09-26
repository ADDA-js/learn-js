var num1 = parseInt('Select a number');
var op = prompt('Select an operation: add, subtract, multiply, divide')
var num2 = parseInt('Select second number');
var solution = 0;

if(op == "add"){
  solution = num1 + num2;
  console.log(solution);
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
