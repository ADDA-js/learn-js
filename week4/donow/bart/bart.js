console.log('working')

//write a function that takes two parameters
//offense, a string
//repeat, a number

//the function should print to the console
//"I will not" plus whatever offense bart has commited now
//should repeat the number of times specified

var punishment = function(offense, repeat){
	for(var i=1; i<=repeat; i++){
		console.log(i + " I will not " + offense);
	}
}

punishment("curse", 20);
punishment("steal", 10);