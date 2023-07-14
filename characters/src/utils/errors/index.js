//Clase de error para que cuando el error llegue al manejador de errores tenga un statusCode
//esto es para que no salga el status code 500
class ClientError extends Error{
    constructor(message,statusCode=400){
        super(message);
        this.statusCode=statusCode;
    }
}

module.exports={ClientError}