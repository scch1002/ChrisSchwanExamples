(function () {
    'use strict';

    var serviceId = 'CheckListItemService';
    angular.module('app').factory(serviceId, ['common', '$http', CheckListItemService]);

    function CheckListItemService(common, $http) {
        var $q = common.$q;

        var service = {
            getCheckListItems: getCheckListItems,
            addCheckListItem: addCheckListItem,
            updateCheckListItem: updateCheckListItem,
            deleteCheckListItem: deleteCheckListItem
        };

        return service;

        function getCheckListItems(id) {
            return $http.get("/api/CheckListItem/" + id);
        };

        function addCheckListItem(checkListItem) {
            return $http.post("/api/CheckListItem", {
                CheckListId: checkListItem.CheckListId,
                ItemText: checkListItem.ItemText,
                DateAdded: new Date().toISOString()
            });
        };

        function updateCheckListItem(checkListItem) {
            return $http.put("/api/CheckListItem/" + checkListItem.Id, {
                Id: checkListItem.Id,
                CheckListId: checkListItem.CheckListId,
                ItemText: checkListItem.ItemText,
                DateAdded: checkListItem.DateAdded
            });
        };

        function deleteCheckListItem(id) {
            return $http.delete("/api/CheckListItem/" + id);
        };
    };
})();