let {BookingSchema}=require("../models");

let booking=(body)=>{
    console.log(body,"res");
    return BookingSchema.create(body);
}

let getbooking=()=>{
    return BookingSchema.find();
}

let cancelbooking=(id)=>{
    return BookingSchema.findByIdAndDelete(id)
}

let updatebooking=(id,body)=>{
 return BookingSchema.findByIdAndUpdate(id,body)
}

module.exports={booking,getbooking,cancelbooking,updatebooking}