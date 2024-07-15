let mongoose=require("mongoose");

function dbconnect(){
 mongoose
 .connect(process.env.DB_URL)
 .then(()=>{
    console.log("Database conncet successfully");
 }).catch((err)=>{
   console.log(err,"err");
 })

}

module.exports=dbconnect    

