//objects.js

var myCar = {
	make: "Oldsmobile",
	year: "1988",
	color: "White",
	miles: 0,
	drive: function(distance) {
		this.miles = this.miles + distance;
	}
}

