/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular.module('vehiculos', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.registrarVehiculo', {
                    url: '/registrar-vehiculo',
                    views: {
                        'menuContent': {
                            controller: 'VehiculoCtrl',
                            templateUrl: 'app/vehiculo/registrar-vehiculo.html'
                        }
                    }
                })
                .state('app.documentosVehiculo', {
                    url: '/documentos-vehiculo',
                    views: {
                        'menuContent': {
                            controller: 'VehiculoCtrl',
                            templateUrl: 'app/vehiculo/documentacion-vehiculo.html'
                        }
                    }
                })
        });
})();