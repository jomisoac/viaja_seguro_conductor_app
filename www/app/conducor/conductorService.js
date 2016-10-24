(function () {
    'use strict';


    angular
        .module('conductores')
        .service("ConductorService", ConductorService);

    function ConductorService($http, $window) {

        var uri = $window.localStorage['uri'];

        this.getAll = function (id) {
            var pet = {
                method: 'GET',
                url: uri + '/empresas/' + id + '/conductores',
                //url: 'http://localhost/viaja_seguro/public/api/empresa/'+id+'/conductores/',
                headers: {
                    'Authorization': 'Bearer ' + $window.localStorage['token']
                }
            };
            return $http(pet);
        }

        this.registrar = function (conductor) {
            var url = uri + '/api/usuarios/conductores';
            return $http.post(url, conductor);
        }

        this.updateRegId = function (conductor_id, reg_id) {
            var pet = {
                method: 'PUT',
                url: uri + '/api/conductores/' + conductor_id + '/reg_id/' + reg_id,
                headers: {
                    'Authorization': 'Bearer ' + $window.localStorage['token']
                }
            };
            return $http(pet);
        }

    }
})();