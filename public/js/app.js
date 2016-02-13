(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'ngResource',
        'ngMap',
        'app.editPicture',
        'app.home',
        'app.logger',
        'app.map',
        'map.service',
        'location.service'
    ])
    .config(config);
    
    config.$inject = ['$routeProvider', '$locationProvider'];
    
    function config($routeProvider, $locationProvider, $location){
        // console.log($location);
        // console.log($routeProvider);
        // console.log($locationProvider);
        $routeProvider.otherwise({ redirectTo: '/' });
//         $routeProvider
//             // home page
//             .when('/', {
//                 templateUrl: 'js/views/home.html',
//                 controller: 'homeController'
//             })
// 
//             .when('/map', {
//                 templateUrl: 'js/views/map.html',
//                 controller: 'mapController'
//             })
// 
//             .when('/home', {
//                 templateUrl: 'js/views/home.html',
//                 controller: 'homeController'	
//             });

        $locationProvider.html5Mode(true);
    }
})();