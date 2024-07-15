let express=require("express");
let route=express.Router();
let {MovieController}=require("../controller");


route.post("/booked",MovieController.bookticket);
route.get("/get/:id",MovieController.getticket);
route.delete("/delete/:id",MovieController.cancelTicket);
route.put("/update/:id",MovieController.updateTicket)

module.exports=route;