(function() {
    'use strict';

    angular
        .module('location.service', [])
        .factory('locationService', locationService);

    locationService.$inject = ['$http'];
    
    function locationService($http) {
        return {
            getAllLocations: getAllLocations
        };
        
        function getAllLocations() {
            return $http.get('http://localhost:3000/api/locations')
                .then(getAllLocationsComplete)
                .catch(getAllLocationsFailed);
                
                function getAllLocationsComplete(response){
                    console.log(response);
                    return response.data;
                }
                
                function getAllLocationsFailed(error){
                    console.log('get all locations failed.' + error);
                }
         }
    }
})();