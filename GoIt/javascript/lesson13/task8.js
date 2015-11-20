 this.filterFood = function(func) {
    return food.filter(func);
  };
  this.removeFood = function(item){
  	if(food.indexOf(item) !== -1) food.splice(food.indexOf(item),1);
  };