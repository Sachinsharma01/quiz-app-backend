import { Joi } from "celebrate";

export default {
    createToken: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(16).required()
    })
}