app.controller('VehiculoCtrl',function($scope,VehiculoService,$rootScope,$ionicPopup,$location,$filter){
  $scope.$on('$ionicView.enter',function(){
    var informacionVehiculo = false;
    $scope.date = new Date();
  });
    
    $scope.vehiculo = {};

  VehiculoService.getById($rootScope.placa).then(
    function(respuesta){
      console.log(respuesta.data);
      if(respuesta.data != "" || respuesta.data != null){
        informacionVehiculo = true;
        $scope.vehiculo = respuesta.data;
        $scope.vehiculo.fecha_soat = new Date(respuesta.data.fecha_soat);
        $scope.vehiculo.fecha_tecnomecanica = new Date(respuesta.data.fecha_tecnomecanica);
      }
    }
    ,function(error){
      console.log(error);
    });

  $scope.registarActualizar = function(){
    if(informacionVehiculo){
      VehiculoService.actualizar($scope.vehiculo).then(
        function(respuesta){
          if(respuesta.statusText == "OK"){
              mostarAlert("Actualizacion del Vehiculo","Vehiculo actualizado correctamente.");
          }
        },function(error){
          console.log(error);
        });
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
