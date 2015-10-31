function duplicates(arr) {
  var unique = [];
  var duplicate = [];
  for(var i = 0; i<arr.length; i++){
    if(unique.indexOf(arr[i]) === -1){
      unique.push(arr[i]);
    } else if (duplicate.indexOf(arr[i]) === -1){
      duplicate.push(arr[i]);
    }
  }
  return duplicate;
}