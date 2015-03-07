angular.module('market-place', [])
.config(function ($stateProvider, $urlRouterProvider){
		alert("hi")
		$stateProvider
		.state('main',{url:'/',template:"/views/buyers/partials/index"})
		.state('buyer',{url:'/buyer',template:"views/buyers/partials/index"})

	})