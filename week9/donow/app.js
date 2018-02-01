// alert('working')
$(document).ready(function() {
	  $.ajax({
      //this will get all the parking violation datai
      url: 'https://data.cityofnewyork.us/resource/avxe-2nrn.json',
    	method: 'GET'
    })
   	.done(calculate);

});

//writea  function called calculate 
//calculate the amount for all parking tickets in the array

var calculate = function(data){
//data is the json object returned from the api.
	var total  = 0;
  debugger;
	for(var i = 0; i < data.length; i++){
		
		var fine = parseInt(data[i].amount_due)
		if(fine){
			// console.log(fine);
			//total += fine; 
			total = total + fine
		}
	}
  console.log(total)

  $('.amt').text(total);
}
