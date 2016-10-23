(function () {
  angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        // .directive('foundItems', FoundItems)
        .constant('urlPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    var promise = MenuSearchService.getMenuCategories();
    promise.then(function (response) {
      ctrl.list = response.data;
      console.log(ctrl.list);
    });

    ctrl.showItems = function () {
      ctrl.menuItems = ctrl.list.menu_items
      console.log(ctrl.foundItems);
    };

    ctrl.logValue = function () {
      console.log(ctrl.searchItem);

    }
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
    };
    return ddo;
  };

})();
