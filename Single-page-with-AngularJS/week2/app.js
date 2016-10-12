(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  var BuyList = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "sausages",
      quantity: 14
    },
    {
      name: "candys",
      quantity: 25
    },
    {
      name: "apples",
      quantity: 7
    },
    {
      name: "bananas",
      quantity: 65
    },
    {
      name: "oranges",
      quantity: 100
    }
  ];
  var BoughtList = [];
  var removed = {};

  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;

    buy.list = ShoppingListCheckOffService.getList(BuyList);

    buy.moveItem = function (itemIdex) {
      ShoppingListCheckOffService.moveItem(itemIdex);
    };

    buy.infoMsg = "Everything is bought!";

  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.list = ShoppingListCheckOffService.getList(BoughtList);

    bought.infoMsg = "Nothing bought yet";

  }

  function ShoppingListCheckOffService() {
  var service = this;

  service.moveItem = function (itemIdex) {
    removed = BuyList.splice(itemIdex, 1);
    BoughtList.push(removed[0]);
  };
  service.getList = function (arr) {
      return arr;
    };
  }

})();
