app.controller('PasajerosCtrl',function($scope,$location,PasajerosService,$rootScope,$ionicLoading){
    $scope.mostrarAdvertencia = true;
    
    $ionicLoading.show();
    $scope.listaPasajeros = [];
    
    $scope.volver = function(){
        $location.path("app/home");
    }
    
    PasajerosService.getAll($rootScope.placa).then(
        function(respuesta){
            $scope.listaPasajeros = respuesta.data;
            if($scope.listaPasajeros.length == 0)
                $scope.mostrarAdvertencia = false;
            else
                $scope.mostrarAdvertencia = true;
            $ionicLoading.hide();
        },function(error){
            console.log(error);
            $ionicLoading.hide();
        }
    );
})
