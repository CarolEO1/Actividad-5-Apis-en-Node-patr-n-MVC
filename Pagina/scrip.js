var Post = function(url,payload,callback){
        
    var xhr = new XMLHttpRequest
    xhr.open("POST",url)
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
    xhr.send(payload)
    
    xhr.addEventListener("readystatechange",function(){
        if(this.readystate == 4){
            return callback(this.responseText)
        }
    })
}

var suma =function(){

    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    var payload = "numero1="+ num1 +"&numero2="+ num2
    
    Post("http://localhost:3000/suma",payload,function(Respuesta){
        console.log(Respuesta)
    })
}

var resta =function(){

    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    var payload = "numero1="+ num1 +"&numero2="+ num2
    
    Post("http://localhost:3000/resta",payload,function(Respuesta){
        console.log(Respuesta)
    })
}

var multiplicacion =function(){

    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    var payload = "numero1="+ num1 +"&numero2="+ num2
    
    Post("http://localhost:3000/multiplicacion",payload,function(Respuesta){
        console.log(Respuesta)
    })
}

var division =function(){

    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    var payload = "numero1="+ num1 +"&numero2="+ num2
    
    Post("http://localhost:3000/division",payload,function(Respuesta){
        console.log(Respuesta)
    })
}

var iniciarSaludo =function(){

    var nom = document.getElementById('Nombre').value;
    var ape = document.getElementById('Apellido').value
    var dir = document.getElementById('Direccion').value

    var payload = "Nombre="+ nom + "&Apellido=" + ape + "&Direccion=" + dir
        
    Post("http://localhost:3000/iniciarSaludo",payload,function(Respuesta){
        console.log(Respuesta)
    })
}

