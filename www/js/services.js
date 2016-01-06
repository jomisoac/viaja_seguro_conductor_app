app.service("ConductorService", function($http){
   
    this.registrar = function(conductor){
        return "Registrado Exitosamente";
    }
    
});

app.service('LoginService',function(){
   
    this.logearse = function(usuario){
        return "Bienvenido";
    }
    
});