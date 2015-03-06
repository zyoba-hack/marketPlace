var app = angular.module('categories', []);

app.controller('categoriesCtrl',function ($scope,$http) {
	$http.get('/api/categories').
      success(function(rows){
      	console.log(rows);
        $scope.datas = rows;
      });
});