/**
 * Created by jose on 23/10/16.
 */
(function() {
    'use strict';

    angular.module('auth', [])
        .config(function ($stateProvider) {
            $stateProvider

                .state('login',{
                    url: '/login',
                    templateUrl: 'app/auth/login.html',
                    controller: 'LoginCtrl'
                })
                .state('registrar', {
                    url: '/registrar',
                    templateUrl: 'app/auth/registrar-conductor.html',
                    controller: 'ConductorCtrl'
                })
        });
})();