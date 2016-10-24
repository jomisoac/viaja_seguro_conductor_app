/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular.module('pasajeros', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('pasajeros', {
                    url: '/pasajeros',
                    templateUrl: 'app/pasajeros/pasajeros.html',
                    controller: 'PasajerosCtrl'
                })
        });
})();