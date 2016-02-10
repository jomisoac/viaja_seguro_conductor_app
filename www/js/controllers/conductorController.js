app.controller('ConductorCtrl', function($scope,$location,$ionicPopup,ConductorService,EmpresaService) {
  $scope.$on('$ionicView.enter',function(){
    $scope.mostrarAdvertencia = false;
  });

    $scope.conductor = {};
    $scope.listaEmpesas = [];

  EmpresaService.getAll().then(
    function(respuesta){
      $scope.listaEmpesas = respuesta.data;
    },function(error){
      console.log(error);
    });

  $scope.volver = function(){
    $location.path("/login");
  }

  $scope.registarConductor = function(){
    $scope.conductor.rol = "CONDUCTOR";
    if($scope.conductor.contrasena == $scope.conductor.confirmarContrasena ){
      ConductorService.registrar($scope.conductor).then(
        function(respuesta){
          if(respuesta.statusText == "OK"){
            mostarAlert("Registro Exitoso", "El conductor se ha registrado satisfatoriamente");
            $location.path("/login");
          }
        }, function(error){
          mostarAlert("Fallo en el Registro", "No se ha podido realizar el registro intente mas tarde");
        });
    }else{
      $scope.mostrarAdvertencia = true;
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
