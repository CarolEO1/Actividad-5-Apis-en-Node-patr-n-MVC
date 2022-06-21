// Config

var express = require('express');
var config = require('./config.js').config
global.app = express();
var datos = []

var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

// enlace a rutas.js

require('./rutas.js')

// Configuración

app.use('/',express.static(__dirname + '/Pagina'))

app.listen(config.puerto,function(){
    console.log('server ready in port '+ config.puerto)
})
