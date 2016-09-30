alert('fizz ready');

var fizzer = function(number){
	if(number % 5 == 0 && number % 3 ==0){
		console.log('fizzbuzz');
	}
	else if(number % 5 == 0){
		console.log('buzz');
	} else if(number % 3 == 0){
		console.log('fizz');
	} else {
		console.log(number);
	}
}

