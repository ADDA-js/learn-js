var payingAttention = true;

while(payingAttention){
  payingAttention = confirm('are you paying attention?');

  document.write("On " + Date() + " you were paying attention <br>");
  //print a msg to the screen
  if(!payingAttention){
    document.write('you stopped paying attention at ' + Date());
  }
}
