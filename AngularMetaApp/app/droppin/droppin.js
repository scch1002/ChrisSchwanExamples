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

        $scope.map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        activate();

        function activate() {
            $scope.createDropPoint = createDropPoint;
            common.activateController(controllerId);
        }

        function createDropPoint(latitude, longitude, title) {

            var latlng = new google.maps.LatLng(latitude, longitude);

            var marker = new google.maps.Marker({
                position: latlng,
                title: title
            });

            marker.setMap($scope.map);

            centerMap(latitude, longitude)
        }

        function centerMap(latitude, longitude) {

            var latlng = new google.maps.LatLng(latitude, longitude);

            $scope.map.setCenter(latlng);
        }
    }
})();