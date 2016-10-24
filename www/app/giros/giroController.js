(function () {
    'use strict';

    angular
        .module('giros')
        .controller('GiroCtrl', GiroCtrl);

    function GiroCtrl($scope, $location, GirosService, $rootScope, $ionicLoading) {
        $scope.mostrarAdvertencia = true;

        $ionicLoading.show();
        $scope.listaGiros = [];
        $scope.giro = {};

        $scope.volver = function () {
            $location.path("app/home");
        }

        GirosService.getAll($rootScope.placa).then(
            function (respuesta) {
                $scope.listaGiros = respuesta.data;
                if ($scope.listaGiros.length == 0)
                    $scope.mostrarAdvertencia = false;
                else
                    $scope.mostrarAdvertencia = true;
                $ionicLoading.hide();
            }, function (error) {
                console.log(error);
                $ionicLoading.hide();
            }
        );

    }

})();