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
            return $http.get("/api/CheckList");
        };

        function addCheckList(checkList) {
            return $http.post("/api/CheckList", {
                CheckListName: checkList.CheckListName,
                DateAdded: new Date.now()
            });
        };

        function deleteCheckList() {
            return $http.delete("/api/CheckList");
        };
    };
})();