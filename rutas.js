var matematicas = require('./api/controladores/MatematicasControler.js').matematicas
var login = require('./api/controladores/LoginControler.js').login

// Cerebro Calculadora

app.post("/suma", function(request,response){
    matematicas.suma(request,response)
})

app.post("/resta", function(request,response){
    matematicas.resta(request,response)
})

app.post("/multiplicacion", function(request,response){
    matematicas.multiplicacion(request,response)
})

app.post("/division", function(request,response){
    matematicas.division(request,response)
})

// Cerebro Saludo

app.post("/iniciarSaludo", function(request,response){
    login.iniciarSaludo(request,response)
})

