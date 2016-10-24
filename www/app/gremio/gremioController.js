(function () {
    'use strict';

    angular
        .module('gremios')
        .controller('GremioCtrl', GremioCtrl);

    function GremioCtrl($scope, $rootScope, ConductorService, $ionicLoading) {
        $ionicLoading.show();
        $scope.listaConductores = [];


        ConductorService.getAll($rootScope.gremio).then(
            function (respuesta) {
                $scope.listaConductores = respuesta.data.data[0].conductores;
                $ionicLoading.hide();
            }, function (error) {
                console.log(error);
                $ionicLoading.hide();
            }
        );
    }

})();