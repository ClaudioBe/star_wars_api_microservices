const axios = require("axios")
const{response}= require('../utils')

module.exports=async(req,res)=>{
    const{id}=req.params;
    let films = {}
    id?films=await axios(`http://database:8004/Film/${id}`)
      :films=await axios("http://database:8004/Film") 
    response(res,200,films.data)
}