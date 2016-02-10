app.controller('GiroCtrl',function($scope,$location,GirosService,$rootScope){
    $scope.listaGiros = [];
    $scope.giro = {};
    
    $scope.volver = function(){
        $location.path("app/home");
    }
    
    GirosService.getAll($rootScope.placa).then(
      function(respuesta){
          $scope.listaGiros = respuesta.data;
      },function(error){
          console.log(error);
      }
  );
    
})
