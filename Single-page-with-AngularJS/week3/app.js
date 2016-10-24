(function () {
  angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('urlPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    var promise = MenuSearchService.getMenuCategories();
    promise.then(function (response) {
      ctrl.list = response.data;
    });

    ctrl.showItems = function () {
      ctrl.menuItems = ctrl.list.menu_items;
      ctrl.matchingItemsList = [];
      for (var i = 0; i < ctrl.menuItems.length; i++) {
        if(ctrl.menuItems[i].name.toLowerCase().indexOf(ctrl.searchItem.toLowerCase()) !== -1){
          ctrl.matchingItemsList.push(ctrl.menuItems[i]);
        }
      }
    };

    ctrl.removeItem = function (index) {
      ctrl.matchingItemsList.splice(index,1);
    };

  };

  MenuSearchService.$inject = ['$http', 'urlPath']
  function MenuSearchService($http, urlPath) {
    var service = this;

    service.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: urlPath
      });
      return response;
    };

  };

  function FoundItems() {
    var ddo = {
      templateUrl: "./item.html"
      // ,
      // scope: {
      //   onRemove: '&'
      // }
    };
    return ddo;
  };

})();
