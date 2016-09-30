app.controller('updateController', function($scope, $location, $routeParams, friendFactory){
	friendFactory.show($routeParams.id, function(data){
		$scope.friend = data;
		$scope.friend.birthday = new Date(data.birthday);
	})

	$scope.updateUser = function(){
		friendFactory.update($scope.updateUser, function(){
			$location.url('/')
		})
	}
})


