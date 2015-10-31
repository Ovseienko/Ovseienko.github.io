function swap(str){
var newStr = str.split('');
var swapped = [];
  var numbers = [1,2,3,4,5,6,7,8,9,0];
for(i=0;i<newStr.length;i++){
  if(newStr[i] == newStr[i].toUpperCase() && numbers.indexOf(newStr[i] == -1)){
   swapped.push(newStr[i].toLowerCase()) ;
  }else{
   swapped.push(newStr[i].toUpperCase()) ;
  }
}

return swapped.join('');
 
}