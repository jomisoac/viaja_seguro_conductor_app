app.controller('HomeCtrl', function($scope,$ionicPopup,$location,$ionicHistory,$window,ConductorService,$rootScope) {

  $rootScope.placa;
  $rootScope.gremio;
  $scope.conductor;
  var conductorId = JSON.parse($window.localStorage['conductor']);
  ConductorService.getById(conductorId.usuario.nombre).then(
    function(respuesta){
      $scope.conductor = respuesta.data;
      $rootScope.gremio = $scope.conductor.empresa_id;
      $rootScope.placa = $scope.conductor.id;
    }
    ,function(error){
    });

  $scope.opcionMenu = function(opcion){
    if(opcion == "Pasajeros"){
      $location.path("/pasajeros");
    }
    if(opcion == "Encomiendas"){
      $location.path("/encomienda");
    }
    if(opcion == "Giros"){
      $location.path("/giro");
    }
  }

  $scope.logout = function(){
    $location.path("/login");
  }

  function mostarAlert(titulo,contenido){
    var alertPopup = $ionicPopup.alert({
      title: titulo,
      template: contenido
    });
    alertPopup.then(function (res) {
      $scope.conductor = {};
    });
  }

})
