//console.log('js working yo');

var name = prompt('Please enter your name');
var age = parseInt(prompt('Please enter your age'));

//if over 18
if(age >= 18){
	var candidate = prompt('Who will you be voting for in the primary?');
	document.write(name + ' is ' + age + ' and will vote for ' + candidate);
} else { //else younger than 18
	document.write('Sorry you can\'t vote. There is always 2020!');
}


