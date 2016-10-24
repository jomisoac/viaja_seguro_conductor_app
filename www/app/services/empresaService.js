(function () {
    'use strict';

    angular
        .module('empresas', [])
        .service('EmpresaService', EmpresaService);

    function EmpresaService($http, $window) {
        var uri = $window.localStorage['uri'];

        this.getAll = function () {
            return $http.get(uri + '/api/empresas');
        }
    }
})();

