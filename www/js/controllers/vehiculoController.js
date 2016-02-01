app.controller('VehiculoCtrl',function($scope,VehiculoService,$rootScope){
  var informacionVehiculo = false;
  $scope.vehiculo = {};

  VehiculoService.getById($rootScope.placa).then(
    function(respuesta){
      console.log(respuesta.data);
      if(respuesta.data != "" || respuesta.data != null){
        informacionVehiculo = true;
        $scope.vehiculo = respuesta.data;
      }
    }
    ,function(error){
      console.log(error);
    });

  $scope.registarActualizar = function(){
    if(informacionVehiculo){
      VehiculoService.actualizar($scope.vehiculo).then(
        function(respuesta){
          console.log(respuesta);
        },function(error){
          console.log(error);
        });
    }
  }
})
