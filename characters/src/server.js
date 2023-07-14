const express = require('express')
const morgan=require('morgan')
const server =express()

server.use(morgan("dev"))
server.use(express.json())
server.use(require('./routes'))

//si una request no encuentra ningun endpoint, por ultima instancia el status es 404 
server.use("*",(req,res)=>{
    res.status(404).send("Not found")
})

//para sobreescribir elmanejador de errores de express

server.use((err,req,res,next)=>{
    res.status(err.statusCode||500).send({
        error:true,
        err: err.message
    })
})

module.exports=server;