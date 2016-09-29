console.log('working');

var userName = prompt('What\'s your name?');

var payingAttention = true;

while(payingAttention){
	console.log("On " + Date() + " " + " was paying attention <br>");
	payingAttention = confirm(userName + " are you still paying attention?");
	console.log(payingAttention);
}

document.write(userName + " stopped paying attention!");