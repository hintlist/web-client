var hintControllers = angular.module('hintControllers', []);

hintControllers.controller('MainPageCtrl', function(){
	var mapOptions = {
		center: new google.maps.LatLng(53.8935943,27.5481534),
		zoom: 14
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
});

hintControllers.controller('EventViewCtrl', ['$scope', '$http', function($scope, $http){
	console.log("Event");
	$http.get('event.json').success(function(data){
		$scope.event = data;
		var myLatlng = new google.maps.LatLng(data.coords[0], data.coords[1]);
		var mapOptions = {
			center: myLatlng,
			zoom: 16
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: data.name
		});
	});
}]);

hintControllers.controller('PlaceViewCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('place.json').success(function(data){
		$scope.place = data;
		console.log(data);
		var myLatlng = new google.maps.LatLng(data.coords[0], data.coords[1]);
		var mapOptions = {
			center: myLatlng,
			zoom: 16
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: data.name
		});
	});
}]);

hintControllers.controller("EventsListCtrl", ['$scope','$http',function($scope, $http){
	$http.get('events.json').success(function(data){
		$scope.events = data;
	});
}]);

hintControllers.controller("PlacesListCtrl", ['$scope','$http',function($scope, $http){
	$http.get('places.json').success(function(data){
		$scope.places = data;
	});
}]);


