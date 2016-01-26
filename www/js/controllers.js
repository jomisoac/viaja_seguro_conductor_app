angular.module('starter.controllers', [])
    .controller('HomeCtrl', function($scope,$ionicPopup,$location,$ionicHistory,$window,ConductorService,$rootScope) {
        
        $rootScope.placa;
        $rootScope.gremio;
        $scope.conductor;
        var conductorId = JSON.parse($window.localStorage['conductor']);
    
        ConductorService.getById(conductorId.usuario.nombre).then(
            function(respuesta){
                $scope.conductor = respuesta.data;
                $rootScope.gremio = $scope.conductor.empresa_id;
                $rootScope.placa = $scope.conductor.vehiculo_id;
            }
            ,function(error){
            });
        
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

        $scope.logout = function(){
            $location.path("/login");
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

<<<<<<< HEAD
    .controller('LoginCtrl',function($scope,$ionicPopup,$location,LoginService,$window,jwtHelper){
=======
    .controller('LoginCtrl',function($scope,$ionicPopup,$location,LoginService){
      $scope.usuario = {};
      $scope.mensajeError = '';
      $scope.nuevaContrasena = '';
      $scope.nuevaContrasenaConfirmacion = '';

      $scope.contrasenasDiferentes = false;
>>>>>>> 8e5e5ca7612e354dacd73ce897c84b106f7e7eea
        $scope.$on('$ionicView.enter',function(){
            $scope.usuario = {};
            $scope.matenerSesion = false 
        });
<<<<<<< HEAD
        $scope.iniciarSesion = function(){
            LoginService.login($scope.usuario).then(success, error);
            function success(p) {
                var conductor = jwtHelper.decodeToken(p.data.token);
                if(conductor.usuario.rol == "CONDUCTOR"){
                    $window.localStorage['conductor'] = JSON.stringify(conductor);
                    if($scope.matenerSesion){
                        $window.localStorage['usuario'] = $scope.usuario
                    }else{
                        $window.localStorage['token'] = p.data.token; 
                    }
                    $location.path("app/home");
                }
            }
            function error(error) {
                mostarAlert("Error login","Error al logear verifique que los datos ingresados sean correctos");
                //$scope.mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un erro inesperado';
            }
=======

      $scope.iniciarSesion = function(){
        LoginService.login($scope.usuario).then(success, error);
        function success(p) {
          var usuario = LoginService.storeUser(p.data.token);
          if(usuario.estado == -1){
            console.log('entro a la sesion')
          }else {
            redirect(usuario.rol);
          }
        }
        function error(error) {
          console.log('Error en Login', error);
          $scope.mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un erro inesperado';
        }
      }


      function redirect(rol){
        if (rol == 'CONDUCTOR') {
          $location.path("app/home");
        }
      }

      $scope.comfirmarContrasenas = function(){
        $scope.mensajeError = '';
        if($scope.nuevaContrasena != $scope.nuevaContrasenaConfirmacion){
          $scope.contrasenasDiferentes = true;
          $scope.formCambiarContrasena.$valid = false;
        }else{
          $scope.contrasenasDiferentes = false;
          $scope.formCambiarContrasena.$valid = true;
        }
      }

      $scope.cambiarContrasena = function(){
        var contrasenas = {
          actual: $scope.usuario.pass,
          nueva: $scope.nuevaContrasena
        }
        authService.updatePassword(authService.currentUser(), contrasenas).then(success, error);
        function success(p) {
          redirect(authService.currentUser().rol);
        }
        function error(error) {
          console.log('Error en Login', error);
          $scope.mensajeError = 'A ocurrido un erro inesperado';
>>>>>>> 8e5e5ca7612e354dacd73ce897c84b106f7e7eea
        }

        function mostarAlert(titulo,contenido){
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: contenido
            });
            alertPopup.then(function (res) {
            });
        }
    })

    .controller('VehiculoCtrl',function($scope,VehiculoService,$rootScope){
        VehiculoService.getById($rootScope.placa).then(
            function(respuesta){ 
                console.log(respuesta);
            }
            ,function(error){
                console.log(error);
            });
    })

    .controller('ConductorCtrl', function($scope,$location,$ionicPopup,ConductorService) {
        $scope.conductor = {};

        $scope.volver = function(){
            $location.path("/login");
        }

        $scope.registarConductor = function(){
            ConductorService.registrar($scope.conductor).then(
                function(respuesta){
                    console.log(respuesta)
                }, function(error){
                    console.log(error);
                });
        }


        function mostarAlert(titulo,contenido){
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: contenido
            });
            alertPopup.then(function (res) {
                $$location.path("/login");
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

    .controller('GremioCtrl',function($scope, $rootScope,ConductorService){
        $scope.listaConductores = [];
    
        ConductorService.getAll().then(
            function(respuesta){
                angular.forEach(respuesta.data, function(value,key){
                    if(value.empresa_id == $rootScope.gremio){
                        $scope.listaConductores.push(value);
                    }
                })
            },function(error){
                
            }
        );
    })
;
