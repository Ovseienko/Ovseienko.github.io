function count (string) {  
  var array = string.toLowerCase().split('');
  var obj = {};
  array.forEach(function(item){
    if(!obj[item]){
      obj[item] = 1;
    }else{
      obj[item] += 1;
    }
  });
   return obj;
}