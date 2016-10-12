app.controller('showController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {

	console.log('edit controller reached', $routeParams._id)

	friendsFactory.show($routeParams._id, function(returnedData) {
		$scope.friend = returnedData;
		// THIS FORMATS THE DATE TO THE CORRECT INPUT FORMAT:
		$scope.friend.birthday = new Date($scope.friend.birthday);
	})
}]);