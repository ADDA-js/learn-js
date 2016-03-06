var Metrocard = function(amount, type){
	this.amount = amount;
	this.date = new Date(); //set the date to when the card is created
	this.cardType = type;
	this.timesUsed = 0;
}

Metrocard.prototype.swipe = function() {
	if(this.cardType == 'ppr' && this.amount >= 2.75){
		this.amount -= 2.75;
		return true;
	}else if(this.cardType == 'monthly' && this.checkExpire() <= 30){
		this.timesUsed++; //not being used for anyting, just for fun.
		return true;
	} else return false;
};

//calculate the days that have passed from when the card was created.
Metrocard.prototype.checkExpire = function() {
	var checkTime = new Date();              // now
	var diff = checkTime.getTime() - this.date.getTime();
	return diff / (1000*60*60*24); //this will give a positive amount of days.
};

var myCard = new Metrocard(0, 'monthly');

console.log(myCard.swipe());




