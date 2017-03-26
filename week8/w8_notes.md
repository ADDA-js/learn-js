## Objectives
- I can use jquery and ajax to 'consume' an api.
- I can build a wordpress blog using cloud9.
- I can use the wordpress REST API to build a single page app.

## Do Now
- paste this into your browser, https://8ball.delegator.com/magic/JSON/Should I skip class?
- This is a magic eight ball api!
- Checkout the files in the 'Do Now' folder, use the 8ball api to make a app
- Follow the directions in the comments.

## Wordpress
### Introducing Wordpress
- Skim the following links...
- https://wordpress.org/about/
- https://optimizerwp.com/what-is-wordpress/
- Turn and Talk: Why use wordpress?

### Cloud 9 + Wordpress
- Slide, What is cloud 9?
- Slide, What is wordpress?
- Slide, Why use cloud 9 with wordpress?
- Walk Through Setup

### Wordpress Dashboard: Content
- Slide, Content and Admin links
- Slide, posts vs pages
- Walk through adding a post using http://www.wpfill.me/
- Walk through adding a page
- WISIWG vs visual
- Show deleting posts and pages
- Slide, Your Turn: Add a simple post and a contact page, create a blog page, leave it empty for now

### Wordpress Dashboard: Admin
- Slide, Jargon: Widgets, Plugins, Themes, Navigations
- Walk through Adding and removing a Widget
- Add some simple text
- Walk through adding a custom menu
- Add the custom menu to the sidebar widget
- Walk through adding a plugin, show using Akismet
- Walk through changing the theme, change to another WP starter theme
- Walk through setting up a static front page and a blog page
- Your Turn: add the "Contact Form 7" plugin to your site. Add some other widget to the sidebar.
- Slide, shortcodes
- Walk through connect contact form 7 to the wp build a form.

## Wordpress REST API
- What is REST, REpresentational State Transfer, show a few minutes of the video in slides.
- The WordPress REST API provides API endpoints for WordPress data types that allow developers to interact with sites remotely by sending and receiving JSON (JavaScript Object Notation) objects.
  - An endpoint is simply a url in an API service
- Why use the WP API? Create Single Page App (SPA)

### SPA Time!
  - From terminal, go to the folder where you are working
  - start server by running this command `python -m SimpleHTTPServer 8080`
  - now in chrome, type `http://localhost:8080/` in the url bar
  - html and css are done, lets write the js for our spa

  ```javascript

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
```
### Your Turn!
- Write a function that will when called, will choose a random post to display.
- Create a random button, that when clicked, will call the random post function



