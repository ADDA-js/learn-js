var stockPrice = 10; //assume dollars

while (stockPrice >= 10){

	stockPrice = parseInt(prompt("What's ADDA's stock price now?")); //won't work - why? Spend 2 minutes discussing this with your partner

	if (stockPrice < 10){
		alert('Sell!!!');
	}
}