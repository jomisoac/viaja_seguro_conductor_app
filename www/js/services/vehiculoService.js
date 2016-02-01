app.service('VehiculoService',function($http,$window){
  this.getById = function (id){
    var pet = {
      method: 'GET',
      url: 'http://localhost/viaja_seguro/public/api/conductores/'+id+'/vehiculo',
      headers: {
        'Authorization': 'Bearer '+$window.localStorage['token']
      }
    };
    return $http(pet);
  }

  this.actualizar = function(vehiculo){
    var pet = {
      method: 'GET',
      url: 'http://localhost/viaja_seguro/public/api/vehiculos/'+vehiculo.id,
      headers: {
        'Authorization': 'Bearer '+$window.localStorage['token']
      },
      data : vehiculo
    };
    return $http(pet);
  }
});
