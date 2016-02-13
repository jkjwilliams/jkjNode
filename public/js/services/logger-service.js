(function () {
    'use strict';

    angular.module('app.logger',[])
        .factory('logger', logger);

    logger.$inject = ['$log'];

    function logger($log) {
        var service = {
            showToasts: true,
            error: error,
            success: success,
            //info: info,
            //warning: warning,
            log: $log.log
        };
        return service;

        function error(message, data, title) {
            toastr.error(message, title);
            $log.error('Error: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success(message, title);
            $log.log('Success: ' + message, data);
        }
    }

})();