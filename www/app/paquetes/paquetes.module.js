/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular.module('paquetes', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('encomienda', {
                    url: '/encomienda',
                    templateUrl: 'app/paquetes/paquetes.html',
                    controller: 'EncomiendaCtrl'
                })
        });
})();