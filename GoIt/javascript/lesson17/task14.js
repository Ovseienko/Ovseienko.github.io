function getDocumentScroll(elem){
  var element = document.getElementById('elem');
  var obj = {
    top: scrollY,
    bottom: scrollY + element.clientHeigth,
    height: scrollHeight
  };
  return obj;
}