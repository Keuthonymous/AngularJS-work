// JavaScript Document
(function () {
	var app = angular.module("testApp", []);

	var MainCtrl = function ($scope) {

		var product = {
			Name: "Something",
			Price: 22.22,
			Description: "It's something"
		};

		$scope.product = product;

	};

	app.controller("MainCtrl", MainCtrl);
}());