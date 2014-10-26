(function () {
    'use strict';

    var serviceId = 'CheckListService';
    angular.module('app').factory(serviceId, ['common', '$http', CheckListService]);

    function CheckListService(common, $http) {
        var $q = common.$q;

        var service = {
            getCheckLists: getCheckLists,
            getCheckList: getCheckList,
            addCheckList: addCheckList,
            updateCheckList: updateCheckList,
            deleteCheckList: deleteCheckList
        };

        return service;

        function getCheckLists() {
            return $http.get("/api/CheckList");
        };

        function getCheckList(id) {
            return $http.get("/api/CheckList/" + id);
        }

        function addCheckList(checkList) {
            return $http.post("/api/CheckList", {
                CheckListName: checkList.CheckListName,
                DateAdded: new Date().toISOString()
            });
        };

        function updateCheckList(checkList) {
            return $http.put("/api/CheckList/" + checkList.Id, {
                Id: checkList.Id,
                CheckListName: checkList.CheckListName,
                DateAdded: checkList.DateAdded
            });
        };

        function deleteCheckList(id) {
            return $http.delete("/api/CheckList/" + id);
        };
    };
})();