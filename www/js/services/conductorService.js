app.service("ConductorService", function($http,$window){

  this.getAll = function(id)
  {
    var pet = {
      method: 'GET',
      url: 'http://localhost/viaja_seguro/public/api/empresas/'+id+'/conductores',
      //url: 'http://localhost/viaja_seguro/public/api/empresa/'+id+'/conductores/',
      headers: {
        'Authorization': 'Bearer '+$window.localStorage['token']
      }
    };
    return $http(pet);
  }

  this.getById = function(id){
    var pet = {
      method: 'GET',
      url: 'http://localhost/viaja_seguro/public/api/conductores/'+id,
      headers: {
        'Authorization': 'Bearer '+$window.localStorage['token']
      }
    };
    return $http(pet);
  }

  this.registrar = function(conductor){
    var url = 'http://localhost/viaja_seguro/public/api/usuarios/conductores';
    return $http.post(url,conductor);
  }

});
