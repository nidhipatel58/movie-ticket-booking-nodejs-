let express=require("express");
let routes=express.Router();
let userRoute=require("./user.route");
let movieRoute=require("./movie.route");
let bookingRoute=require("./booking.route");




routes.use("/user",userRoute);
routes.use("/movie",movieRoute);
routes.use("/booked",bookingRoute)



module.exports=routes;