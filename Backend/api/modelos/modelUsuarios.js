var ModelUsuarios = {}//objeto
const mongoose = require('mongoose')//para importar mongoose


//se crea el esquema de mongo
const Schema = mongoose.Schema;


//organización del esquema 
var UsuariosSchema = new Schema({
    codigo: String,
    nombre: String
})
console.log(UsuariosSchema)
//se crea la coleccion de mongo y se le asigna el esquema 
const Mymodel = mongoose.model('usuarios', UsuariosSchema)


ModelUsuarios.Guardar = function(post, callback){

    //se establece que este documento se guarda en la colleccion "usuarios"
    const instancia = new Mymodel
    instancia.codigo = post.codigo
    instancia.nombre = post.nombre
    instancia.save((error,creado) => {
        if(error){
            return callback ({state:false,data:error})
        }
        else{
            return callback ({state:true,mensaje:creado})
        }
    } ) 

}//recibe la info del controlador con post y retorna con callback


ModelUsuarios.CargarTodas = function(post, callback){

    //buscar en la coleccion 
    Mymodel.find({},{},(error,documentos) => {
        if(error){
            return callback({state:false, data:error})
        }else{
            return callback({state:true, data:documentos})
        }
    })

}


ModelUsuarios.CargarId = function(post, callback){
    //busqueda por ID 
    Mymodel.findById(post.id,{},(error,documentos) => {
        if(error){
            return callback({state:false,data:error})
        }else{
            return callback({state:true,data:documentos})
        }
    })
}


ModelUsuarios.ActualizarId = function(post, callback){
    
    //primero se establecen los datos que se quieren actualizar
    Mymodel.findByIdAndUpdate(post.id,{
        codigo : post.codigo,
        nombre: post.nombre
    },(error,modificado) =>{
        if(error){
            return callback ({state:false,data:error})
        }
        else{
            return callback ({state:true})
        }
    })
}


ModelUsuarios.Eliminar = function(post, callback){
    Mymodel.findByIdAndDelete(post.id,(error,eliminado) => {
        if(error){
            return callback({state:false,data:error})
        }else{
            return callback({state:true})
        }
    })
}





module.exports.usuarios = ModelUsuarios