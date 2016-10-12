// MANAGES ANGULAR PARTIALS AND CONTROLLERS

var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/partials/friends.html',
			controller: 'friendController'
		})
		.when('/new', {
			templateUrl: '/partials/new.html',
			controller: 'newController'
		})
		.when('/edit/:_id', {
			templateUrl: '/partials/edit.html',
			controller: 'editController'
		})
		.when('/show/:_id', {
			templateUrl: '/partials/show.html',
			controller: 'showController'
		})
		.otherwise({
			redirectTo: '/'
		})
});