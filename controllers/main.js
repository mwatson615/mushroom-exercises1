app.controller('MainCtrl', function($scope, $http) {
	$http.get(`list.json`)
	.then(function(value) {
		console.log(value)
	})
})
