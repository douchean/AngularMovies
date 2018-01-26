angular.module('myapp').controller('MovieDetailsController', function($scope, $routeParams, MoviesService) {
	MoviesService.getMovie($routeParams.id).then(function(response) {
		$scope.movie = response;
	});
});