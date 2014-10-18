(function () {
    'use strict';

    var serviceId = 'dropPinService';
    angular.module('app').factory(serviceId, ['common', '$http', dropPinService]);

    function dropPinService(common, $http) {
        var $q = common.$q;

        var service = {
            getDropPins: getDropPins,
            saveDropPin: saveDropPin
        };

        return service;
        
        function getDropPins() {
            return $http.get("/api/DropPin");
        }

        function saveDropPin(latitude, longitude, title) {
            return $http.post("/api/DropPin", {
                Latitude: latitude,
                Longitude: longitude,
                Description: title
            });
        }
    }
})();