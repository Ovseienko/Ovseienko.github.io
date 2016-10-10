(function () {
  'use strict';
  angular.module('CheckApp', [])
  .controller('CheckController', CheckController);

  CheckController.$inject = ['$scope'];

  function CheckController($scope) {
    $scope.checkItems = "";

    function notEmpty(val) {
      return val !== "" && val !== " " ;
    }

    $scope.check = function () {

      var arr = $scope.checkItems.split(',').filter(notEmpty),
          l = arr.length;

      switch (true) {
        case $scope.checkItems === "" :
            $scope.msg = "Please enter data first!";
            $scope.checkClass = "error-class";
            break;
        case (l>3):
          $scope.msg = "Too much!";
          $scope.checkClass = "success-class";
          $scope.note = "Pay attention! We're not taking into account empty item, i.e., , ,!";
          break;
        case l<=3:
          $scope.msg = "Enjoy!";
          $scope.checkClass = "success-class";
          $scope.note = "Pay attention! We're not taking into account empty item, i.e., , ,!";
          break;
      }

    };

    $scope.hideMsg = function () {
      $scope.msg = "";
      $scope.note = "";
    };

  }

})();
