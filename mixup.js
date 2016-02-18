Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

var groups = [];
var numGroups = 4;

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

var shuffled = students.shuffle();

for(var i = 0; i < numGroups; i++){
	groups[i] = shuffled.splice(0, 3)
}
// console.log(shuffled);
console.log(groups);


