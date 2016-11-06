'use strict';

angular.module('view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', function View1Ctrl($scope, $http, $location) {
	$scope.go = function ( path ) {
		$location.path( path );
	};
});

