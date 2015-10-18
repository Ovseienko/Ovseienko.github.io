function getMissingElement(superImportantArray){
superImportantArray.sort();
 var trueArray = [0,1,2,3,4,5,6,7,8,9];
  for(i=0; i < trueArray.length; i++){
    if(superImportantArray.indexOf(trueArray[i]) == -1){
      return trueArray[i];
    }
  }
 return trueArray[i];
}
var superImportantArray = [0,5,1,3,2,9,7,6,4];

console.log(getMissingElement(superImportantArray));