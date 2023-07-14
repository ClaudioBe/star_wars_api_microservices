const server = require('./src/server');
const{Character}=require('./src/database')

// Character.get(5).then((res)=>console.log(res))
//Al no estar definido el campo "unCampoCualquiera" en el esquema no lo crea con ese  campo
//si le paso un numero a una propiedad que es un string lo convierte en string y lo crea
// Character.insert({
//     _id:"201",
//     name:"Clau",
//     birth_year:"1998",
//     unCampoCualquiera:"hi"
// }).then(res=>console.log(res))

server.listen(8004,()=>{
    console.log('Database service on PORT 8004');
})