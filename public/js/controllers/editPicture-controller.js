(function () {
    'use strict';

    angular.module('app.editPicture', ['ngRoute'])
        .config(config)
        .controller('editPictureController', editPictureController);

    config.$inject = ['$routeProvider'];
    //editPictureController.$inject = ['$scope', '$routeParams', 'pictureService', 'locationService', 'wildlifeService', 'moonService', 'logger'];
    editPictureController.$inject = ['$scope', '$routeParams', 'locationService', 'logger'];

    function config($routeProvider) {
        $routeProvider.when('/edit', {
            templateUrl: 'js/views/edit-picture.html',
            controller: 'editPictureController'
        }).when('/editpictures/:id', {
            templateUrl: 'js/views/edit-picture.html',
            controller: 'editPictureController'
        });
    }

    //function editPictureController($scope, $routeParams, pictureService, locationService, wildlifeService, moonService, logger) {
        function editPictureController($scope, $routeParams, locationService, logger) {
        var vm = this;
        vm.pictureId = $routeParams.id;
        vm.wildlife = {};
        vm.animalType = {};
        vm.animalTypes = [];
        vm.moon = {};
        vm.picture = {};
        vm.locations = {};
        vm.location = {};
        vm.moonAge = {};
        // vm.delete = deletePicture;
        // vm.update = updatePicture;

        init();

        function init() {
            // getCameraLocations();
            // getAnimalTypes();
            // getPictureById();
        }
//         function deletePicture(id) {
//             return pictureService.deletePicture(id).then(function (results) {
//                 logger.success('Picture ' + id + ' deleted.');
//             }, function () { logger.error('Picture delete failed'); })
//         }
// 
//         function updatePicture(picture, wildlife) {
//             picture.location = vm.location;
//             return pictureService.updatePicture(picture).then(function (results) {
//                 wildlife.photoId = picture.id;
//                 wildlifeService.updateWildlife(wildlife).then(function (results) {
//                     logger.success('Picture ' + picture.id + ' updated.');
//                 }, function () { logger.error('Picture update failed'); });
//             });
//         }
// 
//         function getCameraLocations() {
//             return locationService.getCameraLocations().then(function (results) {
//                 vm.locations = results;
//             });
//         }
// 
//         function getAnimalTypes() {
//             return wildlifeService.getAllAnimalTypes().then(function (results) {
//                 console.log('results');
//                 console.log(results);
//                 vm.animalTypes = results;
//             });
//         }
// 
//         function getPictureById() {
//             if ($routeParams.id > 0) {
//                 pictureService.getPictureById(vm.pictureId).then(function (results) {
//                     vm.picture = results;
//                     vm.location = vm.picture.location;
//                     moonService.getMoonAgeByDate(vm.picture.dateTaken).then(function (results) {
//                         vm.moonAge = results;
//                         vm.moon = moonService.getMoonPhaseByAge(vm.moonAge);
//                     });
//                 });
//                 wildlifeService.getWildlifeByPicture(vm.pictureId).then(function (results) {
//                     vm.wildlife = results;
//                     vm.animalType = vm.animalTypes[vm.wildlife.animalType - 1];
//                     console.log(vm.animalType);
//                 });
//             }
//         }

    }
})();