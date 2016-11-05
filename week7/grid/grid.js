console.log('working yo');

var rows = 10;
var columns = 10;

$(document).ready(function(){
  for(var i = 0; i < rows; i++){
    var row = $('<div>').addClass('row');

    //nest loop
    for(var j = 0; j < columns; j++){
      var box = $('<div>').addClass('box box-' + i + '-' + j);
      row.append(box);
    } 

    $('.wrapper').append(row);
  }  // outer for loop

  $('.box').click(function(){
    $(this).addClass('clicked');
  })

});


