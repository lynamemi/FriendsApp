app.controller('friendController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
	// MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
	var index = function () {
		friendsFactory.index(function(returnedData) {
			$scope.friends = returnedData;
			console.log($scope.friends);
		});
	};
	index();

	$scope.delete = function (id) {
		friendsFactory.delete(id, function(returnedData) {
			$scope.friends = returnedData;
			index();
		});
	};
}])