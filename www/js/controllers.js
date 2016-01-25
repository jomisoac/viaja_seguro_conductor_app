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

    .controller('LoginCtrl',function($scope,$ionicPopup,$location,LoginService){
      $scope.usuario = {};
      $scope.mensajeError = '';
      $scope.nuevaContrasena = '';
      $scope.nuevaContrasenaConfirmacion = '';

      $scope.contrasenasDiferentes = false;
        $scope.$on('$ionicView.enter',function(){
          $scope.usuario = {};
        });

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
