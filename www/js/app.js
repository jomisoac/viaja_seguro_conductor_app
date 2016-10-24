(function () {
    'use strict';

    angular.module('app', [
        'ionic',
        'ionic.service.core',
        'angular-jwt',
        'ngCordova',
        'ionic.service.push',

        // modules
        'auth',
        'conductores',
        'configuracion',
        'giros',
        'paquetes',
        'pasajeros',
        'gremios',
        'vehiculos',
        // services
        'geolocalizacion',
        'empresas'

    ]);
})();

