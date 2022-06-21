var loginModel = {}
var datos = [];

loginModel.iniciarSaludo = function(post,callback){

    datos.push({Nombre:post.Nombre,Apellido:post.Apellido})
    return callback({mensaje:"Bienvenid@ "+ post.Nombre + ' ' + post.Apellido})
}

module.exports.loginModel = loginModel;