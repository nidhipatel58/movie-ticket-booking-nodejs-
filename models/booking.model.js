let mongoose=require("mongoose");


let BookingSchema=new mongoose.Schema({
 
    userName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserSchema"
    },
    MovieName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MovieSchema"
    },
    totalPrice:{
        type:Number,
        require:true
    }

});

let booking=mongoose.model("Booking",BookingSchema);
module.exports=booking;