import { Joi } from "celebrate";

export default {
    createToken: Joi.object().keys({
        username: Joi.string().min(3).max(16).required().error(new Error('Please provide a valid username')),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(16).required()
    })
}