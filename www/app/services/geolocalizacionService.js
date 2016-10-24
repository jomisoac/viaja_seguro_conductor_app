(function () {
    'use strict';

    angular
        .module('geolocalizacion', [])
        .service('GeolocalizacionService', GeolocalizacionService);

    function GeolocalizacionService($http, $window) {

        var uri = $window.localStorage['uri'];

        this.guardar = function (posicion) {
            console.log($window.localStorage['token']);
            var pet = {
                method: 'POST',
                url: uri + '/conductores/' + posicion.conductor_id + '/ubicacion',
                headers: {
                    'Authorization': 'Bearer ' + $window.localStorage['token']
                },
                data: posicion
            };
            return $http(pet);
        }
    }
})();