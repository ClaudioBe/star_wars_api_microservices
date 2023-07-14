const express=require('express');
const morgan=require('morgan')
const server=express();

server.use(express.json())
server.use(morgan('dev'))
server.use(require('./routes'))

//para sobreescribir el manejador de errores de express
server.use((err,req,res,next)=>{
    res.status(err.statusCode||500).send({
        error:true,
        err: err.message
    })
})

module.exports=server;