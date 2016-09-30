//alert('js working yall');

var name = prompt('whats your name');

var payingAttention = true;

while(payingAttention){
	document.write(name + 
		' is paying attention at ' 
		+ Date() + '! <br>');
	
	payingAttention = confirm('are you paying attention?')
}

alert('done!');