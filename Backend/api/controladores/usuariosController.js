var ModelUsuarios = require(__dirname + '/../modelos/modelUsuarios.js').usuarios

var usuariosController = {}//objeto


usuariosController.Guardar = function(request,response){

    //debe recibir datos para guardar 
    var post = {
        codigo : request.body.codigo,
        nombre : request.body.nombre
    }

    //validaciones
    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state:false,mensaje:"El campo código es obligatorio"})
        return false
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ""){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }
     //despues de las validaciones regresa el post del modelo de acuerdo a lo que State generó True o False
    ModelUsuarios.Guardar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true, mensaje:"Se guardo correctamente"})
        }
        else{
            response.json({state:false, mensaje:"Se presentó un error al guardar"})
        }
    })

} //recibe el request y retorna el response para routes


usuariosController.CargarTodas = function(request,response){

    ModelUsuarios.CargarTodas(null,function(respuesta){
        response.json(respuesta)
    })    
} //en este caso no recibe request y retorna el response para routes


usuariosController.CargarId = function(request,response){

    //recibe los datos que necesita
    var post = {
        id : request.body.id
    }

    //validaciones
    if(post.id == undefined || post.id == null || post.id == ""){
        response.json({state:false,mensaje:"El campo código es obligatorio"})
        return false
    } 

    ModelUsuarios.CargarId(post,function(respuesta){
        response.json(respuesta)
    })
} //recibe el request y retorna el response para routes


usuariosController.ActualizarId = function(request,response){
    //debe recibir datos para guardar 
    var post = {
        id: request.body.id,
        codigo : request.body.codigo,
        nombre : request.body.nombre
    }

    //validaciones
    if(post.id == undefined || post.id == null || post.id == ""){
        response.json({state:false,mensaje:"El campo id es obligatorio"})
        return false
    }

    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state:false,mensaje:"El campo código es obligatorio"})
        return false
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ""){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    ModelUsuarios.ActualizarId(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Se actualizó correctamente'})
        }
        else{
            response.json({state:false,mensaje:'Se presentó error al actualizar'})
        }

    })
} //recibe el request y retorna el response para routes

usuariosController.Eliminar = function(request,response){
    //recibe los datos que necesita
    var post = {
        id : request.body.id
    }

    //validaciones
    if(post.id == undefined || post.id == null || post.id == ""){
        response.json({state:false,mensaje:"El campo código es obligatorio"})
        return false
    }

    ModelUsuarios.Eliminar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se eliminó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"Se presentó un error al eliminar"})
        }
    })
} //recibe el request y response de routes


module.exports.usuarios = usuariosController