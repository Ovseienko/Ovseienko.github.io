function solution(number){
  var array = [];
  for(var i=1; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      array.push(i);
    }
  }
  return array.reduce(function(a,b){
    return a+b;
  });
}
console.log(solution(10));