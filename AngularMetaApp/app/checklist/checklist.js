(function () {
    'use strict';
    var controllerId = 'CheckListCtrl';
    angular.module('app')
        .controller(controllerId, ['common', 'CheckListService', '$scope', checkList]);

    function checkList(common, CheckListService, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        activate();

        function activate() {
            $scope.deleteCheckList = deleteCheckList;
            var promises = [getCheckLists()];
            common.activateController(promises, controllerId);
        };

        function getCheckLists() {
            return CheckListService.getCheckLists().then(function (data) {
                $scope.checkLists = data.data;
            });
        };

        function addCheckList(checkList) {
            CheckListService.addCheckList(checkList).then(function (data) {
                getCheckLists();
            });
        };

        function updateCheckList(checkList) {
        };

        function deleteCheckList(id) {
            CheckListService.deleteCheckList(id).then(function (data) {
                getCheckLists();
            });
        }
    };
})();