(function () {
    'use strict';
    var controllerId = 'droppinCtrl';
    angular.module('app')
        .controller(controllerId, ['common', 'dropPinService', '$scope', droppin]);

    function droppin(common, dropPinService, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var mapOptions = {
            center: { lat: 0, lng: 0},
            zoom: 3
        };

        $scope.map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        activate();

        function activate() {
            $scope.isCollapsed = true;
            $scope.markerList = [];
            $scope.droppinList = [];
            $scope.createDropPin = createDropPin;
            $scope.deleteDropPin = deleteDropPin;
            var promises = [renderDropPins()];
            common.activateController(promises, controllerId);
        }

        function centerMap(latitude, longitude) {
            var latlng = new google.maps.LatLng(latitude, longitude);
            $scope.map.setCenter(latlng);
        };

        function createDropPin(latitude, longitude, title) {

            var latlng = new google.maps.LatLng(latitude, longitude);

            var marker = new google.maps.Marker({
                position: latlng,
                title: title
            });

            saveDropPin(latitude, longitude, title).then(function (data) {
                renderDropPins();
                centerMap(latitude, longitude);
            });
        };

        function deleteDropPin(id) {
            dropPinService.deleteDropPin(id).then(function (deletedDropPin) {
                renderDropPins();
            });
        };

        function saveDropPin(latitude, longitude, title) {
            return dropPinService.saveDropPin(latitude, longitude, title);
        };

        function renderDropPins() {
            angular.forEach($scope.markerList, function (value, key) {
                value.setMap(null);
            });
            $scope.markerList = [];
            return dropPinService.getDropPins().then(function (data) {
                angular.forEach(data.data, function (value, key) {
                    var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(value.Latitude, value.Longitude),
                            title: value.Description
                    });
                    marker.setMap($scope.map);
                    $scope.markerList.push(marker);
                });
                $scope.droppinList = data.data;
            });
        };
    };       
})();