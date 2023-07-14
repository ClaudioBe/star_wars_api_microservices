const axios=require("axios");
const {response}=require('../utils') 

module.exports=async(req,res)=>{
    const {id}=req.params;
    let planets = {}
    id? planets= await axios(`http://database:8004/Planet/${id}`)
      : planets= await axios("http://database:8004/Planet")
    response(res,200,planets.data)
}