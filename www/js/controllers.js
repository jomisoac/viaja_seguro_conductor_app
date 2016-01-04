angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope, $rootScope,$ionicPopup) {
        $rootScope.mostarAlert = function(titulo,contenido){
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: contenido
            });
        }
    })
    
    .controller('ConductorCtrl', function($scope,$rootScope,ConductorService) {
        $scope.conductor = {};
        
        $scope.registarConductor = function(){
            $rootScope.mostarAlert("Conductor Registrado",ConductorService.registrar($scope.conductor));
            $scope.conductor = {};
        } 
    })
;
