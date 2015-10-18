var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(array){
var obj = {};
var newArr = [];
  for(i=0;i<array.length; i++){
    var prop = array[i].toLowerCase().split('').sort().join('');
    obj[prop] = array[i];
  }
  for(var key in obj){
    newArr.push(obj[key]);
  }
  return newArr;
}
console.log( anClean(arr) );