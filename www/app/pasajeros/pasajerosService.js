(function () {
    'use strict';

    angular
        .module('pasajeros')
        .service('PasajerosService', PasajerosService);

    function PasajerosService($http, $window) {
        var uri = $window.localStorage['uri'];

        this.getAll = function (conductorId) {
            var pet = {
                method: 'GET',
                url: uri + '/api/centrales/' + conductorId + '/pasajeros',
                headers: {
                    'Authorization': 'Bearer ' + $window.localStorage['token']
                }
            };
            return $http(pet);
        }


        this.getById = function (id) {
            var pet = {
                method: 'GET',
                url: uri + '/api/pasajeros/' + id,
                headers: {
                    'Authorization': 'Bearer ' + $window.localStorage['token']
                }
            };
            return $http(pet);
        };
    }
})();