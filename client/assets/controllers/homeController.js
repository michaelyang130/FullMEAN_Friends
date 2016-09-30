app.controller('homeController', function($scope, $location, $route, friendFactory){
	friendFactory.home(function(friends){
		$scope.friends = friends;
	})
	$scope.deleteFriend = function(id){
	  friendFactory.delete(id, function(){
	  	$route.reload();
	  });
	}
	$scope.updateFriend = function(id){
		$location.url('/update/'+id);
	}

	$scope.showFriend = function(id){
		$location.url('/show/'+id);
	}
})

