angular.module('myapp').directive('movieThumbnail', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/movie-thumbnail.html',
		scope: {
			movie: "="
		}
	};
});