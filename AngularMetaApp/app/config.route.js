(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'app/admin/admin.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            },
            {
                url: '/droppin',
                config: {
                    title: 'Drop Pin',
                    templateUrl: 'app/droppin/droppin.html',
                    settings: {
                        nav: 3,
                        content: '<i class="glyphicon glyphicon-globe"></i> Drop Pin'
                    }
                }
            },
            {
                url: '/account',
                config: {
                    title: 'Account',
                    templateUrl: 'app/account/account.html',
                    settings: {
                        nav: 4,
                        content: '<i class="glyphicon glyphicon-globe"></i> Account'
                    }
                }
            },
            {
                url: '/checklist',
                config: {
                    title: 'Check List',
                    templateUrl: 'app/checklist/checklist.html',
                    settings: {
                        nav: 5,
                        content: '<i class="glyphicon glyphicon-ok"></i> Check List'
                    }
                }
            },
            {
                url: '/checklistitem/:Id',
                config: {
                    title: 'Check List Item',
                    templateUrl: 'app/checklist/checklistitem.html',
                }
            }
        ];
    }
})();