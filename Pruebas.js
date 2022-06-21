if(nombre == undefined || nombre == null || nombre == ''){
    response.json({state:false,mensaje:"Dato Nombre incorrecto"})
    return false;
}

if(nombre.length <= 4){
    response.json({state:false,mensaje:"El Nombre debe tener mas de 4 caracteres"})
    return false;
}

if(nombre.length >= 15){
    response.json({state:false,mensaje:"El Nombre debe tener menos de 15 caracteres"})
    return false;
}

if(apellido == undefined || apellido == null || apellido == ''){
    response.json({state:false,mensaje:"Dato Apellido incorrecto"})
    return false;
}

if(direccion == undefined || direccion == null || direccion == ''){
    response.json({state:false,mensaje:"Dato Direccion incorrecto"})
    return false;
}

