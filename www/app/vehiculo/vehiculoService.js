(function () {
    'use strict';

    angular
        .module('vehiculos')
        .service('VehiculoService', VehiculoService);

    function VehiculoService($http, $window) {
        var uri = $window.localStorage['uri'];
        this.getById = function (id) {
            var pet = {
                method: 'GET',
                url: uri + '/conductores/' + id + '/vehiculo',
                headers: {
                    'Authorization': 'Bearer ' + $window.localStorage['token']
                }
            };
            return $http(pet);
        }

        this.actualizar = function (vehiculo) {
            var pet = {
                method: 'PUT',
                url: uri + '/vehiculos/' + vehiculo.id,
                headers: {
                    'Authorization': 'Bearer ' + $window.localStorage['token']
                },
                data: vehiculo
            };
            return $http(pet);
        }
    }


})();