this.run = function(){
  if(!this.enable){
    throw new Error('Oшибка, кофеварка выключена!');
    }
     setTimeout(onReady, 1000);
  
}