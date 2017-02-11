/*
var index = 0;

while(index < 10){

	console.log(index);

	index++;
}

console.log('done');
*/ 

//i++ is the same as this i = i + 1;

//For Loop, does exactly the same thing as code above
for(var i = 0; i < 10; i++){
	console.log(i);
}

//excercise
//- Write a for loop that will print to the console whether a number is even or odd.
//- loop from 0 to 20, hint: if a number is odd, print odd
//- i.e. '11 is odd'

for(var i = 0; i <= 20; i++){
	// % returns the remainder of a division problem
	if(i%2 == 0){
		//even
		console.log(i + ' is even');
	} else{
		console.log(i + ' is odd');
	}
}













