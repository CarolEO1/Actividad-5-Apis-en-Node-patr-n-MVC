var loginModel = require('../modelos/LoginModel.js').loginModel

var loginControler = {}

loginControler.iniciarSaludo = function(request,response){

var Nombre = request.body.Nombre
var Apellido = request.body.Apellido
var Direccion = request.body.Direccion

      if(Nombre == undefined || Nombre == null || Nombre == ''){
        response.json({state:false,mensaje:"Dato Nombre incorrecto"})
        return false;
      }
    
      if(Nombre.length <= 4){
        response.json({state:false,mensaje:"El Nombre debe tener mas de 4 caracteres"})
        return false;
    }
    
      if(Nombre.length >= 15){
        response.json({state:false,mensaje:"El Nombre debe tener menos de 15 caracteres"})
        return false;
    }
    
      if(Apellido == undefined || Apellido == null || Apellido == ''){
        response.json({state:false,mensaje:"Dato Apellido incorrecto"})
        return false;
    }
    
      if(Direccion == undefined || Direccion == null || Direccion == ''){
        response.json({state:false,mensaje:"Dato Direccion incorrecto"})
        return false;
    }

    var post = {
        Nombre:Nombre,
        Apellido:Apellido,
    }
    
    loginModel.iniciarSaludo(post,function(resultado){
        response.json(resultado)
    })

}

module.exports.login = loginControler;

