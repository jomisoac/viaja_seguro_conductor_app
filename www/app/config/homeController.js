(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', function($scope,$ionicPopup,$location) {

            $scope.opcionMenu = function(opcion){
                if(opcion == "Pasajeros"){
                    $location.path("/pasajeros");
                }
                if(opcion == "Encomiendas"){
                    $location.path("/encomienda");
                }
                if(opcion == "Giros"){
                    $location.path("/giro");
                }
            }

            function mostarAlert(titulo,contenido){
                var alertPopup = $ionicPopup.alert({
                    title: titulo,
                    template: contenido
                });
                alertPopup.then(function (res) {
                    $scope.conductor = {};
                });
            }
        });

})();