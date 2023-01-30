var express = require('express') //para importar la libreria de express
global.app = express() //para indicar que la app usa la libreria de express
global.config = require(__dirname + '/config.js').config //para extraer la información de configuración
var cors = require('cors') //
require(__dirname + '/routes.js') //importar el archivo routes.js
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))//importar body-parser para que permita trabajar con POST
const mongoose = require('mongoose')//para importar mongoose

app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;

    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
}) //para controlar el acceso a peticiones, direcciones web que pueden ingresar...


app.use(cors({
    origin: function (origin, callback) {
        console.log(origin)
        if (!origin) return callback(null, true)

        if (config.listaBlanca.indexOf(origin) === -1) {
            return callback('error cors', false)
        }

        return callback(null, true)
    }
})) //validar el origen desde el que se conectan,quien puede acceder a la app


app.listen(config.puerto ,function(){
    console.log('Servidor funcionando por el puerto ' + config.puerto)
}) //Para levantar el servidor


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/' + config.db,{useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
        console.log('Conexión a la DB correcta')
    }
})