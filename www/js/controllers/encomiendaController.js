app.controller('EncomiendaCtrl',function($scope,$location,EncomiendaService,$rootScope){
    
    $scope.listaEncomiendas = [];
    $scope.encomienda = {};
    
    $scope.volver = function(){
        $location.path("app/home");
    }
    
    EncomiendaService.getAll($rootScope.placa).then(
      function(respuesta){
          $scope.listaEncomiendas = respuesta.data;
      },function(error){
          console.log(error);
      }
  );
})
