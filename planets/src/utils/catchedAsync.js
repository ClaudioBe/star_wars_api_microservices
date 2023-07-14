//el parametro es el controlador
module.exports=(fn)=>(req,res,next)=>
    fn(req,res).catch(err=>next(err))



//MAS LEGIBLE
// {
//     return function(req,res,next){
//         //para agarrar el error de la promesa que devuelve el controlador
//         fn(req,res).catch((err)=>{
//             //para que el error sea manejado por el manejador de errores de express
//             next(err)
//         })
//     }
// }