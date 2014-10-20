(function () {
    'use strict';

    var serviceId = 'CheckListService';
    angular.module('app').factory(serviceId, ['common', '$http', CheckListService]);

    function CheckListService(common, $http) {
        var $q = common.$q;

        var service = {
            getCheckLists: getCheckLists
        };

        return service;

        function getCheckLists() {
            return $http.Get("/api/CheckList");
        };

        function addCheckList() {
        };

        function deleteCheckList() {

        };
    };
})();