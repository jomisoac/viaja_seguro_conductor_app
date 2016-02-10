app.controller('MenuCtrl',function($scope,$ionicPopup,$rootScope,$window,ConductorService,$location,$timeout){    
    $rootScope.placa;
    $rootScope.gremio;
    $scope.conductor;
    var conductorId = JSON.parse($window.localStorage['conductor']);
    ConductorService.getById(conductorId.usuario.nombre).then(
        function(respuesta){
            $scope.conductor = respuesta.data;
            $rootScope.gremio = $scope.conductor.empresa_id;
            $rootScope.placa = $scope.conductor.id;
            RegistrarPush();
        }
        ,function(error){
        }
    );
    
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
    
    function RegistrarPush(){
        var io = Ionic.io();
        var push = new Ionic.Push({
            "onNotification": function(notification) {
                alert('Received push notification!');
            },
            "pluginConfig": {
                "android": {
                    "iconColor": "#0000FF"
                }
            }
        });

        var user = Ionic.User.current();

        if (!user.id) {
            user.id = ""+$scope.conductor.conductor_id;
        }

        // Just add some dummy data..
        user.set('name', $scope.conductor.nombres+" "+$scope.conductor.apellidos);
        user.save();

        var callback = function(data) {
          push.addTokenToUser(user);
          user.save();
        };
        push.register(callback);

        }
    
});
