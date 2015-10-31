function descendingOrder(n){
  var array = n.toString();
 var sortedArray = array.split('');
  sortedArray.sort(function(a,b){
    return b - a;
  });
  var num = +sortedArray.join('');
  return num;
}