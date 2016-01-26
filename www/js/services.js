app.service("ConductorService", function($http,$window){
    var url = "http://localhost/viaja_seguro/public/api/empresa/conductores/"
    
    this.getAll = function()
    {
        var pet = {
            method: 'GET',
            url: 'http://localhost/viaja_seguro/public/api/empresa/conductores/',
            headers: {
                'Authorization': 'Bearer '+$window.localStorage['token']
            }
        };    
        return $http(pet);
    }
    
    this.getById = function(id){
        var pet = {
            method: 'GET',
            url: 'http://localhost/viaja_seguro/public/api/empresa/conductores/'+id,
            headers: {
                'Authorization': 'Bearer '+$window.localStorage['token']
            }
        };    
        return $http(pet);
    }
    
    this.registrar = function(conductor){    
        return $http.post(url,conductor);
    }

});

app.service('LoginService',function($http){
  this.login = function (usuario){
    return $http.post('http://localhost/viaja_seguro/public/api/login', usuario);
  };
});

app.service('VehiculoService',function($http,$window){
    var url = "http://localhost/viaja_seguro/public/api/empresa/vehiculos/";
    this.getById = function (id){
         var pet = {
            method: 'GET',
            url: url+id,
            headers: {
                'Authorization': 'Bearer '+$window.localStorage['token']
            }
        };
        
        return $http(pet);
    };
});
