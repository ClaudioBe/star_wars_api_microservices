const {response}=require('../utils')
const axios=require("axios");

module.exports=async(req,res)=>{
    const newFilm=await axios.post("http://database:8004/Film", req.body)
    response(res,201,newFilm.data)
}