var i = 2;

for(i=2; i<10; i++){
  var prime = true;
  for(j=2; j<i; j++){
    if(i % j === 0){
      prime = false;
      break;
    }
  }
  if(prime){
    console.log(i);
  }
}