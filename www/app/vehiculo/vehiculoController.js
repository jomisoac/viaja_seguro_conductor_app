(function () {
    'use strict';

    angular
        .module('vehiculos')
        .controller('VehiculoCtrl', VehiculoCtrl);

    function VehiculoCtrl($scope, VehiculoService, $rootScope, $ionicPopup, $location, $filter, $ionicLoading) {
        var informacionVehiculo = false;
        $scope.$on('$ionicView.enter', function () {
            $scope.date = new Date();
            informacionVehiculo = false;
        });

        $ionicLoading.show();

        $scope.vehiculo = {};

        VehiculoService.getById($rootScope.id).then(
            function (respuesta) {
                console.log(respuesta.data);
                if (respuesta.data != "" || respuesta.data != null) {
                    informacionVehiculo = true;
                    $scope.vehiculo = respuesta.data;
                    $scope.vehiculo.fecha_soat = new Date(respuesta.data.fecha_soat);
                    $scope.vehiculo.fecha_tecnomecanica = new Date(respuesta.data.fecha_tecnomecanica);
                    $ionicLoading.hide();
                }
            }
            , function (error) {
                console.log(error);
                $ionicLoading.hide();
            });

        $scope.registarActualizar = function () {
            $ionicLoading.show();
            if (informacionVehiculo) {
                VehiculoService.actualizar($scope.vehiculo).then(
                    function (respuesta) {
                        if (respuesta.status === 200) {
                            $ionicLoading.hide();
                            mostarAlert("Actualizacion del Vehiculo", "Vehiculo actualizado correctamente.");
                        }
                    }, function (error) {
                        $ionicLoading.hide();
                        console.log(error);
                    });
            }
        }

        function mostarAlert(titulo, contenido) {
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: contenido
            });
            alertPopup.then(function (res) {
            });
        }
    }
})();