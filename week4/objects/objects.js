var myCar = {
	make: 'Oldsmobile',
	model: 'Cutlass Classic',
	year: '1991',
	color: 'white',
	'miles driven': 22000,

	drive: function(distance){
		this['miles driven'] += distance;
	}


}
