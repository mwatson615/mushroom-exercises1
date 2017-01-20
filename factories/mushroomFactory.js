app.factory('mushroomFactory', function($http) {

	return {

		getList : () => {
			return $http.get('https://mushroom-madness-exercise.firebaseio.com/.json')
			.then(function(value) {
				// console.log(value.data.mushrooms)
				return value.data.mushrooms
			})
		}
	}
})
