(function () {
	'use strict';

    angular.module('app.map', ['ngRoute', 'ngMap'])
		.config(config)
		.controller('mapController', mapController);

	config.$inject = ['$routeProvider'];

	function config($routeProvider){
		$routeProvider.when('/map', {
			templateUrl: 'js/views/map.html',
			controller: 'mapController'
		});
	}

    mapController.$inject = ['$scope', 'locationService', 'mapService', 'NgMap'];

    function mapController($scope, locationService, mapService, NgMap) {

        var vm = this;
        vm.location = {};
        vm.locations = [];

        getMap();
        
        function getMap(){
            return NgMap.getMap().then(function(evtMap){
                mapService.drawProperty(evtMap);
                mapService.drawHomeMarker(evtMap);
                mapService.drawMarkers(evtMap, vm.locations);    
            });    
        }
        
        // getMapLocations();
        // 
        // function getMapLocations(){
        //     return locationService.getAllLocations().then(function (data) {
        //         vm.locations = data;
        //         vm.location = data[0];
        //     })
        //     // .then(NgMap.getMap().then(function(evtMap){
        //     //     mapService.drawProperty(evtMap);
        //     //     mapService.drawHomeMarker(evtMap);
        //     //     mapService.drawMarkers(evtMap, vm.locations);
        //     //     vm.locations = mapService.locationChoices(evtMap);
        //     // }))
        //     ;
        // }
	};

})();