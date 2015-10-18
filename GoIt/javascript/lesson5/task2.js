var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj){
  for(var prop in obj){
    if(!isNaN(obj[prop])){
    obj[prop] *=2;
    }
  }
  return obj;
}

console.log(multiplyNumeric(image));