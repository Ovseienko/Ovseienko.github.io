function sumArgs() {
  var args = [].slice.call(arguments).reduce(function sum(a,b){
    return a+b;
  });
  return args;
}

console.log( sumArgs(1, 2, 3, 4) );