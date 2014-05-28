var hintApp = angular.module("hintListApp", [
	'ngRoute',
	'hintControllers'
]);

hintApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'MainPageCtrl',
			templateUrl: 'templates/map.html'
		})
		.when('/event/:id', {
			controller: 'EventViewCtrl',
			templateUrl: 'templates/event.html'
		})
		.when('/place/:id', {
			controller: 'PlaceViewCtrl',
			templateUrl: 'templates/place.html'
		})
		.when('/places', {
			controller: 'PlacesListCtrl',
			templateUrl: 'templates/places.html'
		})
		.otherwise({
			controller: 'MainPageCtrl'
			//templateUrl: 'index.html'
		});
}]);