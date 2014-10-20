(function () {
    'use strict';
    var controllerId = 'accountCtrl';
    angular.module('app')
        .controller(controllerId, ['common', 'AccountService', '$scope', account]);

    function account(common, AccountService, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        activate();

        function activate() {
            $scope.registerAccount = registerAccount;
            var promises = [];
            common.activateController(promises, controllerId);
        };

        function registerAccount(newUsername, password, confirmPassword) {
            AccountService.registerAccount(newUsername, password, confirmPassword).then(function (data) {
                $scope.t = data;
            });
        }

        function 
    };
})();