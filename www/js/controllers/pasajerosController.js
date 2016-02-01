app.controller('PasajerosCtrl',function($scope,$location){

  $scope.volver = function(){
    $location.path("app/home");
  }

})
