/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular.module('configuracion', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/menu/menu.html',
                })


                .state('app.home', {
                    url: '/home',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/menu/principal.html',
                            controller: 'HomeCtrl'
                        }
                    }
                })
                .state('app.configuracion', {
                    url: '/configuracion',
                    views: {
                        'menuContent': {
                            //controller: 'HomeCtrl',
                            templateUrl: 'app/configuracion/configuracion.html',
                        }
                    }
                })
            ;

        });
})();