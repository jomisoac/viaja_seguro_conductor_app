app.controller('GiroCtrl',function($scope,$location,GirosService,$rootScope,$ionicLoading){
    $ionicLoading.show();
    $scope.listaGiros = [];
    $scope.giro = {};
    
    $scope.volver = function(){
        $location.path("app/home");
    }
    
    GirosService.getAll($rootScope.placa).then(
      function(respuesta){
          $scope.listaGiros = respuesta.data;
          $ionicLoading.hide();
      },function(error){
          console.log(error);
          $ionicLoading.hide();
      }
  );
    
})
