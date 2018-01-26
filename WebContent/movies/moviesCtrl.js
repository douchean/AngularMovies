angular.module('moviesApp', []).controller('MoviesController', function($scope, $http) {
	$http.get('http://localhost:8080/SecuredFilmWebApp/films').success(function(response){
	$scope.movieChunks = response;
	})
});