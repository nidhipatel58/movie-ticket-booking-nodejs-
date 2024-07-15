let express = require("express");
let route = express.Router();
let { BookingController } = require("../controller")



route.post("/register",BookingController.booking);
route.get("/get/:id",BookingController.getbooking);
route.delete("/delete/:id",BookingController.cancelbooking);
route.put("/update/:id",BookingController.updatebooking);


module.exports = route;