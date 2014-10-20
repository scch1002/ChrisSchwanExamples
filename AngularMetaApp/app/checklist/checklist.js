(function () {
    'use strict';
    var controllerId = 'droppinCtrl';
    angular.module('app')
        .controller(controllerId, ['common', 'dropPinService', '$scope', droppin]);

    function droppin(common, dropPinService, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var mapOptions = {
            center: { lat: 0, lng: 0 },
            zoom: 3
        };

        $scope.map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId);
        };


    };
})();