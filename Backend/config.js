var config ={} //objeto

config.puerto = 3000 //para establecer el puerto
config.db = "Final"
config.listaBlanca = [
    'http://127.0.0.1:5500'
]//lista de direcciones que pueden acceder a la app


module.exports.config = config //exportar la configuración para que se pueda usar en otros archivos