(function () {
    'use strict';
    var controllerId = 'accountCtrl';
    angular.module('app')
        .controller(controllerId, ['common', 'AccountService', '$scope', account]);

    function account(common, dropPinService, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId);
        };
    };
})();