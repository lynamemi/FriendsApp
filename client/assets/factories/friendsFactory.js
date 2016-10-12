// FACTORY GETS CALLS FROM THE CLIENT CONTROLLER AND MAKES HTTP REQUESTS TO THE SERVER CONTROLLER

app.factory('friendsFactory', ['$http', function($http) {
	// CONSTRUCTOR FOR OUR FACTORY
	var friends = [];
	var friend = {};
	function FriendsFactory() {
		var _this = this;

		// FOR INFORMATION IN DATABASE------------------>
		this.index = function(callback) {
			$http.get('/friends').then(function(returnedData) {
				friends = returnedData.data.friends;
				if (typeof(callback) == 'function') {
					callback(friends);
				}
			});
		};
		this.create = function(newFriend, callback) {
			// PASSING NEW FRIEND // BECOMES RE.BODY IN THE CONTROLLER
			// .THEN IS A PROMISE FEATURE
			$http.post('/friends', newFriend).then(function(returnedData) {
				if (typeof(callback) == 'function') {
					callback(returnedData.data.friend);
				}
			});
		};
		this.update = function(id, friend, callback) {
			$http.put('/friends/'+id, friend).then(function(returnedData){
				if (typeof(callback) == 'function') {
					callback();
				}
			});
		};
		this.delete = function(id, callback) {
			$http.delete('/friends/'+id).then(function(returnedData){
				if (typeof(callback) == 'function') {
					callback(returnedData.data.friend);
				}
			});
		};
		this.show = function(id, callback) {
			$http.get('/friends/'+id).then(function(returnedData) {
				if (typeof(callback) == 'function') {
					callback(returnedData.data.friend);
				}
			});
		};


		// FOR INFORMATION IN FACTORY----------------->
		this.getFriends = function(callback) {
			callback(friends);
		};
		this.getFriend = function(callback) {
			callback(friend);
		};
	}
	return new FriendsFactory();
}]);