const jwt=require("jsonwebtoken");
const knex=require("./Data_base");

const GenrateToken=(id)=>{
    return jwt.sign(id,"ilkdjhfuher83erkhfkd");
}



module.exports={GenrateToken}