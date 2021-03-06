(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl:'src/MenuApp/templates/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl:'src/MenuApp/templates/categories.html',
      controller: 'DataController as dataCtrl'
    });

}

})();
