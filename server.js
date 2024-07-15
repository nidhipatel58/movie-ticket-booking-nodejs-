require("dotenv").config();
let http = require("http");
let express = require("express");
const dbconnect = require("./db/db.connect");
const routes = require("./routes");
let app = express();
let cors = require("cors");

//cors
app.use(
    cors({  
        origin: "*",
    })
)

app.set("view engine","ejs")

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/v1", routes)

app.get("/",(req,res)=>{
   res.render("index")
})

//Database Connection:-
dbconnect();


//Server Startup:-
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server Started successfully:)${process.env.PORT}`);
});
