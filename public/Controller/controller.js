var MyApp=angular.module('MyApp',[]);
MyApp.controller('AppCtrl',['$scope','$http',function($scope,$http){

	$http.get('/contactList').success(function(response){
		console.log("i got data requested");
		$scope.contactList=response;
	});

	

}])