app.controller('GiroCtrl',function($scope,$location){
  $scope.volver = function(){
    $location.path("app/home");
  }
})
