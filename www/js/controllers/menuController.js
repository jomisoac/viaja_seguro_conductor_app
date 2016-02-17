app.controller('MenuCtrl',function($scope,$ionicPopup,$rootScope,$window,ConductorService,$location,$timeout,$ionicLoading,$ionicUser, $ionicPush){    
    
    $ionicLoading.show();
    $rootScope.placa;
    $rootScope.gremio;
    $scope.conductor;
    var conductorId = JSON.parse($window.localStorage['conductor']);
    console.log(conductorId)
    ConductorService.getById(conductorId.usuario.nombre).then(
        function(respuesta){
            $scope.conductor = respuesta.data;
            $rootScope.gremio = $scope.conductor.empresa_id;
            $rootScope.placa = $scope.conductor.id;
            $ionicLoading.hide($scope.conductor.id);
        }
        ,function(error){
            $ionicLoading.hide();
        }
    );
    
    $scope.logout = function(){
        $location.path("/login");
    }
    
    
    Ionic.io();
var push = new Ionic.Push();
var user = Ionic.User.current();

// if the user doesn't have an id, you'll need to give it one.
if (!user.id) {
  user.id = Ionic.User.anonymousId();
}

user.set('name', $rootScope.user_name);
user.set('bio', $rootScope.user_bio);
user.save();

 var callback = function(data) {
   console.log('Registered token:', data.token);
   console.log(data.token);
   push.addTokenToUser(user);
   user.save();
}
push.register(callback);
    
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
        alert("Successfully registered token " + data.token);
        console.log('Ionic Push: Got token ', data.token, data.platform);
        $scope.token = data.token;
    });
});
