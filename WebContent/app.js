angular.module("moviesApp", []).constant("baseUrl",
		"http://localhost:8080/SecuredFilmWebApp/films").controller(
		"defaultCtrl", function($scope, $http, baseUrl) {
			$scope.displayMode = "list";
			$scope.currentMovie = null;

			$scope.listMovies = function() {
				$http.get(baseUrl).success(function(data) {
					$scope.movies = data;
				});
			}

			$scope.sortList = function() {
				$http.get(baseUrl + "?sort=year").success(function(data) {
					$scope.movies = data
				});
			}

			$scope.deleteMovie = function(movie) {
				$http({
					method : "DELETE",
					url : baseUrl + "/" + movie.idFilm
				}).success(function() {
					$scope.movies.splice($scope.movies.indexOf(movie), 1);
				});
			}

			$scope.createMovie = function(movie) {
				$http.post(baseUrl, movie).success(function(newMovie) {
					$sccope.movies.push(newMovie);
					$scope.displayMode = "list";
				})
			}

			$scope.updateMovie = function(movie) {
				$http({
					url : baseUrl + "/" + movie.idFilm,
					method : "PUT",
					data : movie
				}).success(function(modifiedMovie) {
					for (var i = 0; i < $scope.movies.length; i++) {
						if ($scope.movies[i].idFilm == movie.id) {
							$scope.movies[i] = movie;
							break;
						}
					}
					$scope.displayMode = "list";
				})
			}

			$scope.editOrCreateMovie = function(movie) {
				$scope.currentMovie = movie ? angular.copy(movie) : {};
				$scope.displayMode = "details";
			}

			$scope.saveEdit = function(movie) {
				if (angular.isDefined(movie.idFilm)) {
					$scope.updateMovie(movie);
				} else {
					$scope.createMovie(movie);
				}
			}

			$scope.cancelEdit = function() {
				$scope.currentMovie = {};
				$scope.displayMode = "list";
			}

			$scope.listMovies();

		});