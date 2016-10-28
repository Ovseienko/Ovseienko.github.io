(function () {
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('urlPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var ctrl = this;

      ctrl.searchItem = '';
      ctrl.errorMsg = '';
      ctrl.loading = false;

      ctrl.searchForItem = function () {
        ctrl.errorMsg = '';
        if (ctrl.searchItem === '') {
          ctrl.errorMsg = "Nothing found!";
          ctrl.found = [];
        }else {
          ctrl.loading = true;
          MenuSearchService.getMatchedItems(ctrl.searchItem)
          .then(function (result) {
            ctrl.errorMsg = '';
            ctrl.found = result;
            ctrl.loading = false;
          }).catch(function (error) {
            console.log(error);
          });
        }
      };

      ctrl.removeItem = function (index) {
        ctrl.found.splice(index,1);
      };

    }


    MenuSearchService.$inject = ['$http', 'urlPath'];
    function MenuSearchService($http, urlPath) {
      var service = this;

      service.getMatchedItems = function (searchI) {
        return $http({
          method: "GET",
          url: urlPath
        }).then(function (result) {
          var foundItems = result.data.menu_items;
          foundItems.filter(function (el) {
            return el.description.toLowerCase().indexOf(searchI.toLowerCase) !== -1;
          });
          return foundItems;
        });
      };

    }

    function FoundItemsDirective() {
      var ddo = {
        templateUrl: './item1.html',
        scope:{
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
    }

})();
