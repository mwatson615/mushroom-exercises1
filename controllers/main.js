app.controller('MainCtrl', function($scope, mushroomFactory) {

	// $scope.functionThing = (arg) => {
	// }
	mushroomFactory.getList()
	.then((val) => {
		$scope.mushrooms = val;
		// $scope.words = '';
		console.log($scope.mushrooms)
	})
})
