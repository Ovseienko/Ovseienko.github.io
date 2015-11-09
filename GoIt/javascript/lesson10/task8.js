var arr = ['link', 'menu',"menu","menu","menu","menu","menu", 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

var obj = {};

arr.forEach(function(item){
  if(!obj[item]){
  obj[item] = 1;
  }else{
    obj[item]+=1;
  }
});
var result = [];
for(var props in obj){
  result.push(props);
}
result.sort(function(a,b){
  return obj[b] - obj[a];
});
console.log(result);