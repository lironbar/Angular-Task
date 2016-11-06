'use strict';

angular.module('users', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/users', {
		templateUrl: 'users-page/users-page.html',
		controller: 'usersCtrl'
	});
}])

.controller('usersCtrl', function usersCtrl($scope, $http) {
	$http.get("https://jsonplaceholder.typicode.com/users")
	.then(function(response) {
		$scope.users = response.data;
	});

	$http.get("https://jsonplaceholder.typicode.com/posts")
	.then(function(response) {
		// Keep posts variable in case of future usage
		$scope.posts = response.data;
		$scope.postsCount = countUserPosts(response.data);
	});

	function countUserPosts(posts) {
		var postsCnt = {};
		angular.forEach(posts, function(post, key) {
			if (postsCnt[post.userId]){
				postsCnt[post.userId]++;
			} else {
				postsCnt[post.userId] = 1;
			}
		});
		console.log(postsCnt);
		return postsCnt;
	}
});