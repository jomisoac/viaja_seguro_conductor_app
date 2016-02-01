app.service('EmpresaService',function($http){
  this.getAll = function (){
    return $http.get('http://localhost/viaja_seguro/public/api/empresas');
  }
});
