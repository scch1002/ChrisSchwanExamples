(function () {
    'use strict';
    var controllerId = 'droppin';
    angular.module('app').controller(controllerId, ['common', 'dropPinService', '$scope', '$http', droppin]);

    function droppin(common, dropPinService, $scope, $http) {
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
            var promises = [renderDropPins()];
            common.activateController(promises, controllerId);
        }

        function createDropPoint(latitude, longitude, title) {

            var latlng = new google.maps.LatLng(latitude, longitude);

            var marker = new google.maps.Marker({
                position: latlng,
                title: title
            });

            saveDropPin(latitude, longitude, title).then(function (data) {
                marker.setMap($scope.map);
                centerMap(latitude, longitude);
            });
        };

        function centerMap(latitude, longitude) {

            var latlng = new google.maps.LatLng(latitude, longitude);

            $scope.map.setCenter(latlng);
        };

        function saveDropPin(latitude, longitude, title) {
            return dropPinService.saveDropPin(latitude, longitude, title);
        };

        function renderDropPins() {
            return dropPinService.getDropPins().then(function (data) {
                angular.forEach(data.data, function (value, key) {
                    new google.maps.Marker({
                        position: new google.maps.LatLng(value.Latitude, value.Longitude),
                        title: value.Description
                    }).setMap($scope.map);
                });
            });
        };
    }
})();