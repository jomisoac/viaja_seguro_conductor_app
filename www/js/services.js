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

app.service('LoginService',function($http, $location, jwtHelper){

  this.login = function (usuario){
    return $http.post('http://localhost/viaja_seguro/public/api/login', usuario);
  };

  this.storeUser = function (jwt) {
    sessionStorage.setItem('jwt', jwt);
    var usuario = jwtHelper.decodeToken(jwt).usuario;
    sessionStorage.setItem('usuario',JSON.stringify(usuario));
    return usuario;
  }

  this.checkAuthentication = function (owner){
    var usuario = JSON.parse(sessionStorage.getItem('usuario'));
    var jwt = sessionStorage.getItem('jwt');
    if(!jwt || jwtHelper.isTokenExpired(jwt) || !usuario || usuario.rol != owner){
      $location.path("/login");
    }
    if(($location.path() === '/login') && usuario.rol == owner){
      $location.path('/home');
    }
  }

  this.currentUser = function(){
    return JSON.parse(sessionStorage.getItem('usuario'));
  }
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
