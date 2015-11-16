function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power){
  Machine.call(this);
  var food = [];
  
  this.addFood = function(item){
     if (this._enabled) {
      throw new Error("Нельзя добавить еды");
    }
    
    for(i=0; i<arguments.length;i++){
      food.push(arguments[i]);
    }
    if(arguments.length + food.length > this.power/100){
      throw new Error("Слишком много еды"); 
    }
  };
  
  this.getFood = function(){
    return food.slice();
  };
   
}