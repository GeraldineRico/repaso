const express = require('express');
const app = express.Router();

var usuariosController = require(__dirname + '/api/controladores/usuariosController.js').usuarios

app.use(express.json());

app.post("/Usuarios/Guardar",function(request,response){
    usuariosController.Guardar(request,response)
})// se crea la ruta para "guardar... usuarios", se establecen las funciones de recibir y responder y se conecta para enviar lo que reciba y responda al controlador

app.post("/Usuarios/CargarTodas",function(request,response){
    usuariosController.CargarTodas(request,response)
})

app.post("/Usuarios/CargarId",function(request,response){
    usuariosController.CargarId(request,response)
})

app.post("/Usuarios/ActualizarId",function(request,response){
    usuariosController.ActualizarId(request,response)
})

app.post("/Usuarios/Eliminar",function(request,response){
    usuariosController.Eliminar(request,response)
})