    var list = document.createElement('ul');
    document.body.appendChild(list);

    while (true) {
      var ask = prompt("Ваш текст");

      if (!ask) break;

      var newli = document.createElement('li');
      
      newli.appendChild(document.createTextNode(ask));
      
      list.appendChild(newli);
    }