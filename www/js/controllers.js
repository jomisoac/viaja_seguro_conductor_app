angular.module('starter.controllers', [])
    .controller('HomeCtrl', function($scope,$ionicPopup,$location,$ionicHistory) {
        
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
        
    })

    .controller('LoginCtrl',function($scope,$ionicPopup,$location,LoginService){
        $scope.$on('$ionicView.enter',function(){
           $scope.usuario = {}; 
        });
    
        $scope.login = function(){
            //mostarAlert("Login Correcto",LoginService.logearse($scope.usuario));
            $location.path("app/home");
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
    })
    
    .controller('ConductorCtrl', function($scope,$location,$ionicPopup,ConductorService) {
        $scope.conductor = {};
    
        $scope.volver = function(){
            $location.path("/login");
        }
        
        $scope.registarConductor = function(){
            mostarAlert("Conductor Registrado",ConductorService.registrar($scope.conductor));
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
    })

    .controller('PasajerosCtrl',function($scope,$location){
        
        $scope.volver = function(){
            $location.path("app/home");
        }
    
    })

    .controller('EncomiendaCtrl',function($scope,$location){
        $scope.volver = function(){
            $location.path("app/home");
        }
    })

    .controller('GiroCtrl',function($scope,$location){
        $scope.volver = function(){
            $location.path("app/home");
        }
    })
;
