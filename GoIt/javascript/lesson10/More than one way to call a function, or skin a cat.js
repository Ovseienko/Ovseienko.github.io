function sum (a,b){
  if(arguments.length == 2) {
    return a + b;
  }
  return function(b) {
    return a + b;
  }
}