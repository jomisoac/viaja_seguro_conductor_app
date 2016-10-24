(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuCtrl',function($scope,$ionicPopup,$rootScope,$window,ConductorService,$location,$timeout,$ionicLoading,$ionicUser, $ionicPush){

            $ionicLoading.show();
            var usuario = JSON.parse($window.localStorage['conductor']);
            $rootScope.id = usuario.conductor.id;
            $rootScope.gremio = usuario.conductor.empresa;
            $scope.usuario = usuario;
            $ionicLoading.hide(usuario.conductor.id);
            registrarUsuario($scope.usuario);
            resgistrarToken();

            $scope.logout = function(){
                $location.path("/login");
                $window.localStorage.clear();
            }

            function registrarUsuario(usuario){
                var user = $ionicUser.get();
                if(!user.user_id) {
                    user.user_id = $ionicUser.generateGUID();
                };

                // Establecemos alguna información para nuestro usuario
                angular.extend(user, {
                    name: usuario.conductor.nombres+" "+usuario.conductor.apellidos,
                    id: usuario.conductor.id
                });

                $ionicUser.identify(user).then(function(){
                    $scope.identified = true;
                    console.log('Usuario identificado: ' + user.name + '\n ID ' + user.user_id);
                });

            }

            function resgistrarToken(){
                $ionicPush.register({
                    canShowAlert: true, //Se pueden mostrar alertas en pantalla
                    canSetBadge: true, //Puede actualizar badgeds en la app
                    canPlaySound: true, //Puede reproducir un sonido
                    canRunActionsOnWake: true, //Puede ejecutar acciones fuera de la app
                    onNotification: function(notification) {
                        // Cuando recibimos una notificacion, la manipulamos aqui
                        //mostarAlert('Notificacion', notification.message);
                        return true;
                    }
                });
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

            $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
                console.log("Successfully registered token " + data.token);
                console.log('Ionic Push: Got token ', data.token, data.platform);
                $scope.token = data.token;
                ConductorService.updateRegId($scope.conductor.id, data.token).then(succes, error);
                function succes(p){
                    console.log(p.data)
                }
                function error(e){
                    console.log('algun error', e)
                }
            });
        });

})();