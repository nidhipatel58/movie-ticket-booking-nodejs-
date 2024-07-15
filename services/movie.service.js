let { MovieSchema } = require("../models");

let bookticket = (body) => {
  console.log(body, "res");
  return MovieSchema.create(body)
}

let getticket = () => {
  return MovieSchema.find();
}

let cancelTicket = (id) => {
  return MovieSchema.findByIdAndDelete(id)
}

let updateTicket = (id, body) => {
  return MovieSchema.findByIdAndUpdate(id, body)
}


module.exports = { bookticket, getticket, cancelTicket,updateTicket}



