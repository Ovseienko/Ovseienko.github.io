var obj = {
  className: 'open menu menu'
};

function removeClass(obj, cls) {
  var theClass = obj.className.split(' ');

  for (i = 0; i < theClass.length; i++) {
    
    if (theClass[i] == cls) {
      theClass.splice(i,1); 
      i--;
    }
    
  }
  obj.className = theClass.join(' ');

}
removeClass(obj, 'menu');
console.log(obj);