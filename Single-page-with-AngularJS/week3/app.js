(function () {
  angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('urlPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: './item.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function NarrowItDownDirectiveController() {
    var list = this;

    list.empty = function() {
      return list.items && list.items.length === 0;
    };

    list.notEmpty = function() {
      return list.items && list.items.length > 0;
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
      var ctrl = this;

      ctrl.searchItem = '';

      ctrl.searchForItem = function () {
        if (ctrl.searchItem === '') {
          ctrl.found = [];
        }else{
          MenuSearchService.getMatchedItems(ctrl.searchItem)
          .then(function (result) {
            ctrl.found = result;
          }).catch(function (error) {
            console.log(error);
          });
        }
      };
      ctrl.removeItem = function (index) {
        ctrl.found.splice(index,1);
      };
      // var promise = MenuSearchService.getMenuCategories();
      // promise.then(function (response) {
      //   ctrl.list = response.data;
      //   ctrl.menuItems = ctrl.list.menu_items;
      //   // console.log(ctrl.menuItems);
      // });
      // ctrl.matchingItemsList = [];
      //
      // ctrl.showItems = function () {
      //   for (var i = 0; i < ctrl.menuItems.length; i++) {
      //     if(ctrl.menuItems[i].name.toLowerCase().indexOf(ctrl.searchItem.toLowerCase()) !== -1){
      //       ctrl.matchingItemsList.push(ctrl.menuItems[i]);
      //     }
      //   }
      //   console.log(ctrl.matchingItemsList);
      // };
      //
      // ctrl.removeItem = function (itemIndex) {
      //     ctrl.matchingItemsList.splice(itemIndex, 1);
      // };

    }


    MenuSearchService.$inject = ['$http', 'urlPath', '$filter'];
    function MenuSearchService($http, urlPath, $filter) {
      var service = this;

      service.getMatchedItems = function (searchItem) {
        return $http({
          method: "GET",
          url: urlPath
        }).then(function (result) {
          var foundItems = result.data.menu_items;
          return $filter('filter')(foundItems, {description: searchItem});
        });
      };

    }

})();
