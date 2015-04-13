angular.module('myApp', []).

	controller('MyController', function($scope) {
		$scope.name = 'YourName'

		$scope.resetName = function() {
			$scope.name = 'YourName'
		}
});