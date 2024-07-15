let express = require("express");
let route = express.Router();
let { UserController } = require("../controller");
const  validate  = require("../middleware/validate");
let {userValidation} = require("../validations");
const { isLogin } = require("../middleware/auth");
let {upload}=require("../middleware/upload")





route.post("/register",upload.single("profile"), UserController.register);
route.get("/get/:id",isLogin, validate(userValidation.user), UserController.getUser);
route.delete("/delete/:id", validate(userValidation.user), UserController.deleteUser);
route.put("/update/:id",validate(userValidation.user), UserController.updateUser)


//Login:-
route.post("/login",validate(userValidation.user),UserController.Login);
route.get("/profile",isLogin,UserController.getProfile)

module.exports = route;