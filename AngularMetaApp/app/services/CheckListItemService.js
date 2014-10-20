(function () {
    'use strict';

    var serviceId = 'CheckListItemService';
    angular.module('app').factory(serviceId, ['common', '$http', CheckListItemService]);

    function CheckListItemService(common, $http) {
        var $q = common.$q;

        var service = {
            getCheckListItems: getCheckListItems
        };

        return service;

        function getCheckListItems(id) {
            return $http.Get("/api/CheckListItem/" + id);
        };
    };
})();