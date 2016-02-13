(function () {
    'use strict';

    angular.module('app.home', [])
        .config(config)
        .controller('homeController', homeController);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/views/home.html',
            controller: 'homeController'
        }).when('/home', {
            templateUrl: 'js/views/home.html',
            controller: 'homeController'
        });
    }

    function homeController() {
        var vm = this;
        vm.siteMessage = 'This site is dedicated to the Myers, Williams and Schmidt families. The website is created and maintained by Jeremy O Williams.';
    }

})();