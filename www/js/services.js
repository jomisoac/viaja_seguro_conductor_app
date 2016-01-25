app.service("ConductorService", function($http){

    this.registrar = function(conductor){
        return "Registrado Exitosamente";
    }

});

app.service('LoginService',function($http){
  this.login = function (usuario){
    return $http.post('http://localhost/viaja_seguro/public/api/login', usuario);
  };
});
