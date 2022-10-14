import { Joi } from "celebrate";

export default {
    createToken: Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(16).required(),
        email: Joi.string().email({tlds: {allow: ['com', 'in']}}).required(),
        password: Joi.string().min(6).max(16).required()
    })
}