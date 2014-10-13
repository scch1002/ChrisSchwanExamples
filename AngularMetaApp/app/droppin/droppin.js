(function () {
    'use strict';
    var controllerId = 'droppin';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$scope', droppin]);

    function droppin(common, datacontext, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        activate();

        function activate() {
            common.activateController(controllerId)
        }

        $scope.check = 'This is a check.';
    }
})();