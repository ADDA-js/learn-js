//This is a car constructor!
var Car = function (manufacturer, model, year, color, miles) {
	this.make = manufacturer,
	this.model = model,
	this.year = year,
	this.color = color,
	this.miles = miles
}

var cassCar = new Car ('Nissan', 'Pathfinder', 1995, 'Green', -1000);

Car.prototype.drive = function(distance) {
	this.miles += distance;
};