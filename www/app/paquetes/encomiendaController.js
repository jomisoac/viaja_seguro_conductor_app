(function () {
    'use strict';
    angular
        .module('paquetes')
        .controller('EncomiendaCtrl', EncomiendaCtrl);

    function EncomiendaCtrl($scope, $location, EncomiendaService, $rootScope, $ionicLoading) {
        $scope.mostrarAdvertencia = true;

        $ionicLoading.show();

        $scope.listaEncomiendas = [];
        $scope.encomienda = {};

        $scope.volver = function () {
            $location.path("app/home");
        }

        EncomiendaService.getAll($rootScope.placa).then(
            function (respuesta) {
                $scope.listaEncomiendas = respuesta.data;
                if ($scope.listaEncomiendas.length == 0)
                    $scope.mostrarAdvertencia = false;
                else
                    $scope.mostrarAdvertencia = true;
                $ionicLoading.hide();
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
            }
        );
    }

})();