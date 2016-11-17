# Week 9 Notes

## Objectives

## Agenda

## Do Now
Go to this link...https://data.cityofnewyork.us/resource/uvbq-3m68.json
  - What type of data is this?
  - How much does the amount due on the 4th entry?
  - Using the files in the do now folder, calculate how much $ is owed to NYC for parking violations! 
  - Hint: write a for loop!

### Solution
```javascript
// alert('working')
$(document).ready(function() {
	  $.ajax({
      //this will get all the parking violation datai
      url: 'https://data.cityofnewyork.us/resource/uvbq-3m68.json',
    	method: 'GET'
    })
   	.done(calculate);

});

//writea function called calculate
//calculate the amount due for all parking tickets in the array

var calculate = function(data){
//data is the json object returned from the api.
  var amount = 0; //initialize amount to 0, this will keep track of the sum of all amts due

  for(var i = 0; i < data.length; i++){ //since data is an array, it has a length!
    var fine = data[i].amount_due;
    //oops, fine is a string?
    fine = parseInt(fine); //change fine from text to a string;
    amount += fine; //this is the same as `amount = amount + fine;`
  }
  //after the for loop, amount should be the sum of all amounts, lets double
  //check!!
  console.log("Total:$", amount);

  //put the total on the screen
  //target the span with the `amt` class
  $('.amt').text = amount;
}
```
