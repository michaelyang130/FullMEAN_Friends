app.controller('newController', function($scope, $location, $route, friendFactory){
	$scope.createFriend = function(){
		friendFactory.create($scope.newFriend, function(){
			$scope.newFriend = {};
			$location.url('/')
		})
	}
	$scope.goBack = function(){
		$location.url('/')
	}
})

