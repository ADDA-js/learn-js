alert('working')

//starter
var titles= ['Please Please Me', 'With the Beatles', 'Hard Days Night', 'Beatles on Sale', 'Help!', 'Rubber Soul', 'Revolver', 'Sgt. Peppers Lonely Heart Club Band', 'Magical Myster Tour', 'The White Album', 'Yellow Submarine',  'Abbey Road', 'Let It Be']



//write a function called length, that returns a new array filled with just the lengths of the elements inside the original array

//your function here!
var findLengths = function(array){
//create an array called nums
	var nums = [];
//for each item in the array, find its length
	for(var i=0; i < array.length; i++){
		//store that length in nums
		var text = array[i] + ""; //this is the string, adding the "" forces to be a string
		var length = text.length;
		//add length to the array nums
		nums.push(length);
	}
//after you have checked all items in the array
//return the nums array
	return nums;
}

var result = findLengths(titles);
console.log(result);
//this should print [16, 16, 15, 15, 5, 11, 8, 35, 19, 15, 16, 10, 9]

//Bonus
var edges = [333, 2, "five"]
console.log(findLengths(edges));
//oops! this prints [undefined, undefined, "4"], 
//how can you get it to print [1,1, 4] instead?
//Fix your function to do this!

