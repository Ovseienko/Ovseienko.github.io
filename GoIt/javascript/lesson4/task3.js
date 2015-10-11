function checkLength(text){
  if(text.length <= 20){
    return text;
  }else{
    return text.substr(0,20) + "...";
  }
}