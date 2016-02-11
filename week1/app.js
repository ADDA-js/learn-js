// alert('js working yo!')

var userName = prompt("What's your name?");

alert("hi " + userName);

var coder = confirm('do you code?');

if(coder == true){
	document.write(userName + "is a coder!");
} else {
	document.write(userName + "is not a coder!");
}

var age = parseInt(prompt('Whats your age?'));

// if(age === NaN){
// 	age = parseInt(prompt('Whats your age? Use a Number!'));
// }

if(age > 30){
	var newAge = age + 10;
	alert(newAge + ': Sorry, the camera adds ten years')
} else {
	alert("sweet");
}



