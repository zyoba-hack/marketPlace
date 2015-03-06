angular.module('market-place', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('main',{url:'/',template:"/views/buyers/partials/index"})
		.state('buyer',{url:'/buyer',template:"views/buyers/partials/index"})

	})


