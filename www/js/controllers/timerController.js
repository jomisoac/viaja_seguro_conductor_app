app.controller('TimerCtrl',function($scope,$timeout,$rootScope,GeolocalizacionService,$window){

    $timeout(ActualzarPosicion, 30000);
    
    function ActualzarPosicion(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                console.log($rootScope.placa);
                var posicion = {
                    conductor_id: $rootScope.placa,
                    latitud: lat,
                    longitud: lng
                };
                
                GeolocalizacionService.guardar(posicion).then(
                    function(respuesta){
                        console.log(respuesta.data);
                        $timeout(ActualzarPosicion, 300000);
                    },function(error){
                        console.log(error);
                        $timeout(ActualzarPosicion, 3000);
                    }
                );
            });
        } 
    }
});
