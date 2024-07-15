let mongoose = require("mongoose");

let MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    duration:{
        type:Number,
        require:true
    },
    showtime:{
        type:Date,
        require:true
    },
    releasedate:{
        type:Date,
        require:true
    }
});


let movie = mongoose.model("Movie", MovieSchema);
module.exports = movie;