(function () {
    'use strict';

    var serviceId = 'AccountService';
    angular.module('app').factory(serviceId, ['common', '$http', AccountService]);

    function AccountService(common, $http) {
        var $q = common.$q;

        var service = {
            registerAccount: registerAccount
        };

        return service;

        function registerAccount(userName, password, confirmPassword) {

            var user = {
                UserName: userName,
                Password: password,
                ConfirmPassword: confirmPassword
            };

            return $http.post("/api/Account/Register/", user);
        };
    };
})();