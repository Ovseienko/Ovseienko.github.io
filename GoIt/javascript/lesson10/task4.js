function sortString(string){
 var toUp = string.split(' ');
var result = [];
  for(i=0; i<toUp.length; i++){
   result.push(toUp[i].charAt(0).toUpperCase() + toUp[i].slice(1));
  }
 return result.join(' ');
}
console.log(sortString('the quick brown fox'));