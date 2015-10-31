var Calculator = {
 average: function() {
 var sum = 0;
   for(i=0;i<arguments.length;i++){
     sum+=arguments[i];
   }
 var result = sum/arguments.length;
 if(arguments.length == 0){
   return result = 0;
 }
   return result;
 }
};