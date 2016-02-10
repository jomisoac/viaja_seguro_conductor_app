app.controller('PasajerosCtrl',function($scope,$location,PasajerosService,$rootScope){
    $scope.listaPasajeros = [];
    
    $scope.volver = function(){
        $location.path("app/home");
    }
    
    PasajerosService.getAll($rootScope.placa).then(
        function(respuesta){
            $scope.listaPasajeros = respuesta.data;
        },function(error){
            console.log(error);
        }
    );
})
