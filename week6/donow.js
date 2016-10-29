//metrocard object constructor

console.log('working yo!');

var metrocard = function(amount){
	this.date = new Date();
	this.amount = amount;

	this.swipe = function(){
		if(this.amount >= 2.75){
			this.amount = this.amount - 2.75;
			return true;
		} else {
			return false;
		}
	}
}

adamCard = new metrocard(20);