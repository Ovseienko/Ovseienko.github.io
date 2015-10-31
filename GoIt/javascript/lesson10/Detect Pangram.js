function isPangram(string){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var array = string.toLowerCase().split('').sort();
  var unique = [];
  for(i=0;i<array.length;i++){
    if(unique.indexOf(array[i]) == -1){
      unique.push(array[i]);
    }
  }
  
 var joinedUnique = unique.join('');
 
 if(joinedUnique.indexOf(alphabet) === -1){
   return false;
 }else{
   return true;
  }
}