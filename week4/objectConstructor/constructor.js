console.log('working');
//constructor function
//its job is to create new objects

var Car = function(make, model, year, color, miles){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.miles = miles;	

	this.drive = function(distance){
		this.miles = this.miles + distance;
	}
}

var oliviaCar = new Car('Toyota', 'Prius', '2006', 'Blue', 20000);
var avivaCar = new Car('Honda', 'Odyssey', '2008', 'Silver', 150000);
