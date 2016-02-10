var app = angular.module('EfarmApp', []);
app.controller('DocsList', function($scope, $http) {
	$scope.title = "Your tasks";
	$scope.tasks = [
		{
			image:'img/map.png', 
			taskName: 'My task 01', 
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/d3ababca-4ad0-43c2-aef4-31f723d22b0b'
		},
		{
			image:'img/map.png',
			taskName: 'My task 02',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/d74a42f4-dea7-4b08-a6ac-814738d6d9fc'
		},
		{
			image:'img/map.png',
			taskName: 'My task 03',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/f0903ea1-a4ef-4709-a910-44d5206a864e'
		},
		{
			image:'img/map.png',
			taskName: 'My task 04',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/7f10fce2-18cb-4e5d-a9b4-ff99a334bbd4'
		}
	];

	$scope.selectedIndex = 0;

	$scope.select= function(i) {
	  $scope.selectedIndex = i;
	};

	$scope.getData = function(u) {
		$http.get(u).then(function(response) {
			$scope.taskData = response.data;
		}, function(response) {
			console.log(response.status);
		});
	};

	$scope.getData($scope.tasks[0].url);

});

app.directive('getDetails', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'templates/details.html'
	}
});