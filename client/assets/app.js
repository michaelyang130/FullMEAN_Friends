var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	})
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/update/:id', {
		templateUrl: 'partials/update.html',
		controller: 'updateController'
	})
	.when('/show/:id', {
		templateUrl: 'partials/show.html',
		controller: 'showController'
	})
	.otherwise({
		redirectTo: '/'
	})
})