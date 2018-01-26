angular.module('moviesApp').factory('MoviesService', function($http) {
	var MOVIES_API_URL = 'http://localhost:8080/SecuredFilmWebApp/films/';

	var getMovies = function() {
		return $http.get(MOVIES_API_URL).then(function(response) {
			return response;
		});
	};

	var getMovie = function(id) {
		return $http.get(MOVIES_API_URL + id).then(function(response) {
			return response.data;
		});
	};


	return {
		getMovies: getMovies,
		getMovie: getMovie
	};
});