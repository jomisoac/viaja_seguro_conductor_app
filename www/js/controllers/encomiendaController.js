app.controller('EncomiendaCtrl',function($scope,$location,EncomiendaService,$rootScope,$ionicLoading){
    
    $ionicLoading.show();
    
    $scope.listaEncomiendas = [];
    $scope.encomienda = {};
    
    $scope.volver = function(){
        $location.path("app/home");
    }
    
    EncomiendaService.getAll($rootScope.placa).then(
      function(respuesta){
          $scope.listaEncomiendas = respuesta.data;
          $ionicLoading.hide();
      },function(error){
          $ionicLoading.hide();
          console.log(error);
      }
  );
})
