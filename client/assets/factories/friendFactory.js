app.factory('friendFactory', function($http){
	var factory = {};
	factory.home = function(callback){
		$http.get('/friends').then(function(data){
			// console.log(data.data.friends);
			callback(data.data.friends);
		})
	}
	factory.create = function(newfriend, callback){
		// console.log(newfriend);
		$http.post('/friends', newfriend).then(function(data){
			// console.log(data);
			callback(data.data.friends);
		})
	}
	factory.update = function(update_user, callback){
		$http.put('/friends/'+update_user._id, update_user).then(function(data){
			console.log('HELLO')
			callback(data.data.friend);
		})
	}
	
	factory.show = function(id, callback){
		// console.log(id)
		$http.get('/friends/'+id).then(function(data){
			// console.log(data.data.friend);
			callback(data.data.friend);
		})
	}
	return factory;
})
