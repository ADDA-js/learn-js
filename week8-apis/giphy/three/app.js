//Same as Two to start
window.onload = function() {

  var url = 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC';
  
  axios.get(url).then(render);
}

var render = function(response) {
  //build the elements to the dom
  //Grab the wrapper div
   
  //with a for loop
  //for every object in the response data array
  //  -create a new image tag 
  //	-grab the fixed-height url //go to one.html look at the json
  // 	-set the img src to the url
  //	-append the img to the wrapper
  
}
