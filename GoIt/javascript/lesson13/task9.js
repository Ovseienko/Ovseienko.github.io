var parentMehod = this.disable;
this.disable = function(){
  if(food.length > 0) throw new Error('B холодильнике есть еда');
  parentMehod();
};