  var data = {
      "Рыбы": {
        "Форель": {},
        "Щука": {}
      },

      "Деревья": {
        "Хвойные": {
          "Лиственница": {},
          "Ель": {}
        },
        "Цветковые": {
          "Берёза": {},
          "Тополь": {}
        }

      }
    };
var container = document.getElementById('container');

function createTree(obj){
  var list = document.createElement('ul');
  for(var keys in obj){
    var listLi = document.createElement('li');
    listLi.innerHTML = keys;
    var ulul = createTree(obj[keys]);
    if(ulul) listLi.appendChild(ulul);
    list.appendChild(listLi);
  }
  return list;
}

function appendTo(container,obj){
  container.appendChild(createTree(obj));
}
appendTo(container,data);