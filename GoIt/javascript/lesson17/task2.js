remove = function(elem){
  if(parentElem){
    parentElem.removeChild(elem);
  }
};
var elem = document.body.children[0];
elem.remove();