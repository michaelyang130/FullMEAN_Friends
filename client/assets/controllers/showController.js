app.controller('showController', function($scope, $location, $routeParams, friendFactory){
	friendFactory.show($routeParams.id, function(data){
		$scope.friend = data;
		$scope.friend.birthday = new Date(data.birthday);
	})
	$scope.goBack = function(){
		$location.url('/');
	}
})
