let Joi=require("joi");

let user={
    
    body:Joi.object().keys({
        email: Joi.string().required().trim(),
        password:Joi.string().min(7).required().strict()
    })
}

module.exports={user}