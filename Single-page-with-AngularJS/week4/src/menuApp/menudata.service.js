(function () {
  angular.module('data')
  .constant('urlPath', "https://davids-restaurant.herokuapp.com/categories.json")
  .service('MenuDataService', MenuDataService );

  MenuDataService.$inject = ['$http', 'urlPath'];
  function MenuDataService($http, urlPath) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method: "GET",
        url: urlPath
      }).then(function (result) {
        var catList = result.data;
        console.log(catList);
      });
    };

    service.getItemsForCategory = function (categoryShortName) {

    };
  }
})();
