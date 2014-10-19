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
            $scope.registerUser = registerUser;
            var promises = [];
            common.activateController(promises, controllerId);
        };

        function registerUser(newUsername, password, confirmPassword) {
            AccountService.registerUser(newUsername, password, confirmPassword).then(function (data) {
                $scope.t = data;
            });
        }
    };
})();