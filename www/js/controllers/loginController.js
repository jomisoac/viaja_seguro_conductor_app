app.controller('LoginCtrl',function($scope,$ionicPopup,$location,LoginService,$window,jwtHelper){
    $scope.$on('$ionicView.enter',function(){
        $scope.usuario = {};
        $scope.matenerSesion = false
    });
    
    $scope.iniciarSesion = function(){
        LoginService.login($scope.usuario).then(success, error);
        function success(p) {
            var conductor = jwtHelper.decodeToken(p.data.token);
            console.log(conductor);
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
