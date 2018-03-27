var data = null;

$(document).ready(function() {
  // get the data from the api 
  getPizza();

  //Write this last! click listenders for the list items
  $('.roll').on('click', 'li', function() {
    //get the dataid for whatever item has been clicked
    var id = $(this).attr('dataid');
    //call the renderContent, pass the id of what to render
    renderContent(id);
  })
});

//getPizza function, grabs data from api using ajax
var getPizza = function() {
  //do an ajax get request to the url for the wordpress api, get the all the
  //posts
  $.ajax({
      url: 'https://pizzatime-awdriggs.c9users.io/wp-json/wp/v2/posts',
      method: 'GET',
    //when done, all the render the posts titles to the sidebar
    }).done(renderSidebar);
}

//render function, expects a 'response' parameter
var renderSidebar = function(response) {
  console.log(response);

  $.each(response, function(i) {
    console.log(response[i].title)
    
    //use a new list item with the title text as the title
    var current = $('<li>')
    current.html(response[i].title.rendered)
    current.attr('dataId', i)
    current.addClass('pizzaPlace');
    
    //append the new list item to the roll
    $('.roll').append(current);
  
    //this will allow us to have full access to the response anywhere in the
  //program.
  data = response;
  })
}

var renderContent = function(id) {
  console.log(id)
  //set the title to the post title
  $('.title').html(data[id].title.rendered);
  
  //set the inside content to the post content
  var contentHTML = data[id].content.rendered;
  $('.inside').html(contentHTML);
}

//Your Turn!
//Write a function that will when called, will choose a random post to display.

//Create a random button, that when clicked, will call the random post function
