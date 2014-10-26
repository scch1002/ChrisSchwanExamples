(function () {
    'use strict';
    var controllerId = 'CheckListCtrl';
    angular.module('app')
        .controller(controllerId, ['common', 'CheckListService', '$location', '$scope', checkList]);

    function checkList(common, CheckListService, $location, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        activate();

        function activate() {
            $scope.addCheckList = addCheckList;
            $scope.updateCheckList = updateCheckList;
            $scope.deleteCheckList = deleteCheckList;
            $scope.viewCheckList = viewCheckList;
            var promises = [getCheckLists()];
            common.activateController(promises, controllerId);
        };

        function getCheckLists() {
            return CheckListService.getCheckLists().then(function (data) {
                $scope.checkLists = data.data;
            });
        };

        function addCheckList(checkList) {
            return CheckListService.addCheckList(checkList).then(function (data) {
                getCheckLists();
            });
        };

        function updateCheckList(checkList) {
            return CheckListService.updateCheckList(checkList).then(function (data) {
                getCheckLists();
            });
        };

        function deleteCheckList(id) {
            CheckListService.deleteCheckList(id).then(function (data) {
                getCheckLists();
            });
        }

        function viewCheckList(id) {
            $location.path("/checklistitem/" + id);
        }
    };
})();