console.log('working yo');
//make a rows variable and a columns variable

//once the dom is ready...
$(document).ready(function(){
  //make a for loop to build the rows
    //create a row div, add class row;

    //make a for loop for the columns
      //create the box div, add class box
      //append the box to the row
    //append the row to the wrapper
  
  //use implicit iteration to a click function to each of the boxes
  //since boxes aren't being added dynamically, no need for a delegated event
 var rows = 10;
 var columns = 10;
  for(var i = 0; i < rows; i++){
    var row = $('<div>').addClass('row');
    
    for(var j = 0; j < columns; j++){
     var box =  $('<div>').addClass('box row-'+i + ' col-'+j);

      row.append(box);
    }

    $('.wrapper').append(row);
  }

  //click event to each box
  $('.box').click(function(){
  	 console.log(this);
  	$(this).addClass('clicked');
  })
});


