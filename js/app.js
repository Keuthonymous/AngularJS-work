// JavaScript Document
(function () {
	var app = angular.module("testApp", []);
	
	app.filter("reverse", function() {
		return function(input) {
			var result = "";
			input = input || "";
			for(var i = 0; i < input.length; i += 1) {
				result = input.charAt(i) + result;
			}
			return result;
		};
	});
	
}());
