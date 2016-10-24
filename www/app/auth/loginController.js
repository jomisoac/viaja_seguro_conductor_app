(function () {
    'use strict';

    angular
        .module('auth')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $ionicPopup, $location, LoginService, $window, jwtHelper, $ionicLoading) {
        $scope.$on('$ionicView.enter', function () {
            $scope.usuario = {};
            $scope.matenerSesion = false
        });

        $scope.iniciarSesion = function () {
            $ionicLoading.show();
            LoginService.login($scope.usuario).then(success, error);
            function success(p) {
                var usuario = p.data.data.user;
                if (usuario.rol == "CONDUCTOR") {
                    $window.localStorage['conductor'] = JSON.stringify(usuario);
                    if ($scope.matenerSesion) {
                        $window.localStorage['usuario'] = JSON.stringify(usuario);
                    } else {
                        $window.localStorage['token'] = p.data.data.token;
                    }
                    $location.path("app/home");
                }
                $ionicLoading.hide();
            }

            function error(error) {
                $ionicLoading.hide();
                // console.log(error.status)
                // $scope.mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un erro inesperado';
                if(error.status === 401){
                    var titulo = 'Usuario o Contrase&ntilde;a inconrrectos';
                    var contenido = 'Verifica tus datos de inicio e intentalo denuevo';
                    mostarAlert(titulo, contenido);
                }else{
                    var titulo = 'Error !';
                    var contenido = 'Ha ocurrido un error inesperado, por favor intentalo denuevo'
                    mostarAlert(titulo, contenido);
                }

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