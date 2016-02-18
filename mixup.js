var students = [
'Eleanor Murguia', 
'Molly Mittler', 
'Shruti Varadarajan', 
'Sarah Breen', 
'Dominique Holt', 
'Cassidy Mayeda', 
'Helen Guo', 
'Yasmina Milord', 
'Hannah Spierer', 
'Clarke Wheeler', 
'Anam Lakhani', 
'Claudia Focacci Polgar', 
]

var grpSize = 3;
var mixup = function(grpSize, list){
	var studentArray = list;
	var groups = [];
	var index = 0;

	while(studentArray.length > 0){
		var index;
		var rand = Math.floor(Math.random(0, studentArray.length));
		for(var i = 0; i < grpSize; i++){
			groups[index] += studentArray.splice(rand, 1) + ', ';
		}

	}

	return groups;	
}

document.writes(mixup(3, students));

