var app = angular.module('EfarmApp', []);
app.controller('DocsList', function($scope, $http) {
	$scope.title = "Your tasks";
	$scope.tasks = [
		{
			image:'img/map.png', 
			taskName: 'My task 01', 
			url:'http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK'
		},
		{
			image:'img/map.png',
			taskName: 'My task 02',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/d74a42f4-dea7-4b08-a6ac-814738d6d9fc?callback=JSON_CALLBACK'
		},
		{
			image:'img/map.png',
			taskName: 'My task 03',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/f0903ea1-a4ef-4709-a910-44d5206a864e?callback=JSON_CALLBACK'
		},
		{
			image:'img/map.png',
			taskName: 'My task 04',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/e653f518-af71-4e8a-84d0-c26208543e25'
		}
	];
	
	$scope.getData = function(u) {
		$http.jsonp(u).then(function(response) {
			$scope.myData = response.data.found;
			console.log(response.data);

		}, function(response) {
			console.log(response.status);
		});
	};
	$scope.details = [
		{
			image: 'img/field.png',
			detailName: 'Field',
			detailDescription: $scope.myData
		},
		{
			image: 'img/operation.png',
			detailName: 'Operation',
			detailDescription: $scope.myData
		},
		{
			image: 'img/vehicle.png',
			detailName: 'Vehicle',
			detailDescription: $scope.myData
		},
		{
			image: 'img/materials.png',
			detailName: 'Materials',
			detailDescription: $scope.myData
		},
		{
			image: 'img/from.png',
			detailName: 'From',
			detailDescription: $scope.myData
		}
	];
	$scope.theDate = '2015-04-23T00:00:00';
});
