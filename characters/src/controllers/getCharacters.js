// const Character =require('../data')
const axios=require('axios')
const {response}=require('../utils')

module.exports=async (req,res)=>{
    const {id}=req.params;
    let characters={}
    id?characters= await axios(`http://database:8004/Character/${id}`)
      :characters = await axios("http://database:8004/Character")
    response(res,200,characters.data)
}