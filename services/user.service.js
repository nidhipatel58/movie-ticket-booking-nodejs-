let { UserSchema } = require("../models");

let register = (body) => {
   console.log(body, "res");
   return UserSchema.create(body)
}

let getUser = () => {
   return UserSchema.find();
}

let FindUser = (email) => {
   return UserSchema.findOne({ email })
}

let deleteUser = (id) => {
   return UserSchema.findByIdAndDelete(id)
}

let updateUser = (id, body) => {
   return UserSchema.findByIdAndUpdate(id, body)
}


module.exports = { register, getUser, deleteUser, updateUser, FindUser }

