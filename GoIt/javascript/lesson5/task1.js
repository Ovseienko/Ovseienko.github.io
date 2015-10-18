var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
var max = 0;
var theBest;
for(var prop in tasksCompleted){
 if(max<tasksCompleted[prop]){
   max=tasksCompleted[prop];
   theBest=prop;
 }
}
console.log(theBest);