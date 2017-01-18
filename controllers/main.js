app.controller('MainCtrl', function($scope, $http, mushroomFactory) {

	mushroomFactory.getList()
	.then((val) => {
		console.log(val)
	})
})
