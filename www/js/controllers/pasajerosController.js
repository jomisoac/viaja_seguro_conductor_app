app.controller('PasajerosCtrl',function($scope,$location,PasajerosService,$rootScope,$ionicLoading){
    $ionicLoading.show();
    $scope.listaPasajeros = [];
    
    $scope.volver = function(){
        $location.path("app/home");
    }
    
    PasajerosService.getAll($rootScope.placa).then(
        function(respuesta){
            $scope.listaPasajeros = respuesta.data;
            $ionicLoading.hide();
        },function(error){
            console.log(error);
            $ionicLoading.hide();
        }
    );
})
