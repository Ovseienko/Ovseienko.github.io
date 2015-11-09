function pattern(n){
  var output = '';
  if (n>0){
    var result = [];
    
    var line = Array(n).join(' ');
    
   for(var i=0; i<=n; i++){
    line+=i%10;
   }
    
   result.push(line);
   
   for(i = 1; i<n; i++){
      var string = result[i-1].substring(1)+' ';
      result.push(string);
    }
    output=result.join('\n');
     return output;
  }
}
console.log(pattern(10));