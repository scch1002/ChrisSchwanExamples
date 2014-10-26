(function () {
    'use strict';
    var controllerId = 'CheckListItemCtrl';
    angular.module('app')
        .controller(controllerId, ['common', 'CheckListItemService', '$routeParams', '$scope', checkListItem]);

    function checkListItem(common, CheckListItemService, $routeParams, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        activate();

        function activate() {
            $scope.checkListId = $routeParams.Id;
            $scope.addCheckListItem = addCheckListItem;
            $scope.updateCheckListItem = updateCheckListItem;
            $scope.deleteCheckListItem = deleteCheckListItem;
            var promises = [getCheckListItems($scope.checkListId)];
            common.activateController(promises, controllerId);
        };

        function getCheckListItems(id) {
            return CheckListItemService.getCheckListItems(id).then(function (data) {
                $scope.checkListItems = data.data;
            });
        };

        function addCheckListItem(checkListItem) {

            checkListItem.CheckListId = $scope.checkListId;

            return CheckListItemService.addCheckListItem(checkListItem).then(function (data) {
                getCheckListItems($scope.checkListId);
            });
        };

        function updateCheckListItem(checkListItem) {

            checkListItem.CheckListId = $scope.checkListId;

            return CheckListItemService.updateCheckListItem(checkListItem).then(function (data) {
                getCheckListItems($scope.checkListId);
            });
        };

        function deleteCheckListItem(id) {
            CheckListItemService.deleteCheckListItem(id).then(function (data) {
                getCheckListItems($scope.checkListId);
            });
        }
    };
})();