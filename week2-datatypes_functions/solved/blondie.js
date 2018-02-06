var telephone = function(){
  return "867-5309"
}

var blondie = function(func){
  console.log("call me at " + func())
}

blondie(telephone);

