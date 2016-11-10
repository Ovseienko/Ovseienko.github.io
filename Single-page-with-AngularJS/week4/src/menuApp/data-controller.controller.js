(function () {
    angular.module('data')
    .controller('DataController', DataController);

    DataController.$inject = ['MenuDataService'];
    function DataController(MenuDataService) {
      var dataCtrl = this;

      dataCtrl.$onInit = function () {
        console.log('oninit');
      };

    }
})();
