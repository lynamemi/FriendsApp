app.controller('newController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location) {

	$scope.create = function() {
		var newFriend = {first_name: $scope.first_name, last_name: $scope.last_name, birthday: $scope.birthday};

		// PASSING NEW FRIEND TO SERVER / DB
		// RETURNED DATA IS JSON FROM THE SERVER
		console.log(newFriend)
		friendsFactory.create(newFriend, function(returnedData) {
			$scope.friends = returnedData;
			$location.url('/')
		})
	}
}]);