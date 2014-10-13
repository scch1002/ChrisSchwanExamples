(function () {
    'use strict';
    var controllerId = 'droppin';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$scope', droppin]);

    function droppin(common, datacontext, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var mapOptions = {
            center: { lat: -34.397, lng: 150.644},
            zoom: 8
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    
        activate();

        function activate() {
            common.activateController(controllerId)

        }
    }
})();