var Metrocard = function(amount, date){
	this.amount = amount;
	this.date = date;
	
}

Metrocard.prototype.swipe = function() {
	if(this.amount >= 2.75){
		this.amount -= 2.75;
		return true;
	} else return false;
};

var myCard = new Metrocard(20, '3/6/16');

console.log(myCard.swipe());




