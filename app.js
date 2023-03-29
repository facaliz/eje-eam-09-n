//Declaraciones
const { response } = require("express");
const express =require("express");
const app = express(); //Responder solicitdes de clientes = Chrome, Safari, Insomnia, etc.

const port = process.env.PORT || 3000;  //Para que cuando realicemos en Deploy(depliegue)

//Configuraciones
//para obtener un recurso del servidor http://localhost:3000
app.get("/",(req,res)=>{
    res.send("Hola. Este es un servidor en Node.js con express");       
})
//para obtener un recurso del servidor http://localhost:3000/productos
app.get("/productos",(req,res)=>{
    res.send("Esta seria la pagina de productos de ejemplo s");
})

//Proceso
app.get("*",(req,res)=>{
    res.send("404 | Pagina no encontrada");
})

app.listen(port,(req,res)=>{
    console.log("Servidor en Node.js con express escuchando en el puerto:",port);
})
/*
app.get =Obtener un recurso
app.post = Crear un recurso
app.post =Actualizar un recurso
app.delete =Eliminar un recurso*/
