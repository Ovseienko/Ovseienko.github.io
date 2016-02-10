var app = angular.module('EfarmApp', []);
app.controller('DocsList', function($scope, $http) {
	$scope.title = "Your tasks";
	$scope.tasks = [
		{
			image:'img/map.png', 
			index: 1,
			taskName: 'My task', 
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/d3ababca-4ad0-43c2-aef4-31f723d22b0b'
		},
		{
			image:'img/map.png',
			index: 2,
			taskName: 'My task',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/d74a42f4-dea7-4b08-a6ac-814738d6d9fc'
		},
		{
			image:'img/map.png',
			index: 3,
			taskName: 'My task',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/f0903ea1-a4ef-4709-a910-44d5206a864e'
		},
		{
			image:'img/map.png',
			index: 4,
			taskName: 'My task',
			url:'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri=content://TRACK/e653f518-af71-4e8a-84d0-c26208543e25'
		}
	];
	$scope.showIndex = function(index) {
		return (index < 10) ? ("0" + index) : index;
	}

	$scope.selectedIndex = 0; /* first one set active by default */
	$scope.select= function(i) {
	  $scope.selectedIndex=i;
	};

	$scope.getData = function(u) {
		$http.get(u).then(function(response) {
			// console.log(response.data);
			$scope.taskData = response.data;
			console.log($scope.taskData);
		}, function(response) {
			console.log(response.status);
		});
	};

	$scope.showMateials = function(arr){
		return arr.join(', ');
	}


});

app.directive('getDetails', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'mytemplate'
	}
});