  function insertAfter(elem, refElem) { 
 var parentElem = refElem.parentNode;
    return parentElem.appendChild(elem);
  }

var elem = document.createElement('div');
  elem.innerHTML = '<b>Новый элемент</b>';
//insertAfter(elem, body.firstChild);
 //insertAfter(elem, body.lastChild);