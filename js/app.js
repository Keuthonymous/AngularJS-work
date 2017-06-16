// JavaScript Document
(function () {
	var app = angular.module("testApp", []);

	var MainCtrl = function ($scope, $http) {
			$scope.toggle = true;
		
			$scope.$watch('toggle', function(){
				$scope.toggleText = $scope.toggle ? 'Hide' : 'Show';
			});
	};

	app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);
}());