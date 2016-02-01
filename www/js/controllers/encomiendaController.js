app.controller('EncomiendaCtrl',function($scope,$location){
  $scope.volver = function(){
    $location.path("app/home");
  }
})
