'use strict';

angular.module('myApp', [
	'ngRoute',
	'view1',
	'users'
	]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({redirectTo: '/view1'});
}]);
