app.controller('GremioCtrl',function($scope, $rootScope,ConductorService){
  $scope.listaConductores = [];

  ConductorService.getAll($rootScope.gremio).then(
    function(respuesta){
      $scope.listaConductores = respuesta.data;
    },function(error){
      console.log(error);
    }
  );
})
