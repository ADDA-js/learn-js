console.log('working yo');

var rows = 10;
var columns = 10;

$(document).ready(function(){
  
  for(var i = 0; i < rows; i++){
    var row = $('<div>').addClass('row');
    for(var j = 0; j < columns; j++){
     var box =  $('<div>').addClass('box row-' + i + ' col-' + j);
      row.append(box);
    }

    $('.wrapper').append(row);
  }

  //create a click event on the 
  $('.box').click(function(){
    //this will be the box that is clicked
    console.log(this);
    $(this).addClass('clicked');
  });  
});


