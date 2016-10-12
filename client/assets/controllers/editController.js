app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location','$window', function($scope, friendsFactory, $routeParams, $location, $window) {

	// ROUTE PARAMS ALLOW US TO PASS THE PARARMETER FROM THE VIEW TO THE BACKEND
	friendsFactory.show($routeParams._id, function(returnedData) {
		$scope.friend = returnedData;
		// THIS FORMATS THE DATE TO THE CORRECT INPUT FORMAT:
		$scope.friend.birthday = new Date($scope.friend.birthday);
	})

	// $SCOPE IS FOR ACCESSING THIS METHOD WITH NG-SUBMIT OR NG-CLICK IN THE EDIT VIEW
	$scope.update = function(){
		friendsFactory.update($routeParams._id,$scope.friend,function(){
			$location.url('/')
		})
	}
}]);