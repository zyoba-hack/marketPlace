var app = angular.module('market-place', ['categories']).
config(function ($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('main',{url:'/',template:"/views/buyers/partials/index"})
		.state('buyer',{url:'/buyer',template:"views/buyers/partials/index"})

	})


