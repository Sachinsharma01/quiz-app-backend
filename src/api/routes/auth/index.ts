import { Router } from 'express';
import celebrate from 'celebrate'
import validation from './validation';
import controller from './auth.controller'
import decrypt from '../../middlewares/decrypt'
const route = Router();

export default (app:Router) => {
    // app.use('/quiz/api/auth', route);
    console.log("auth")
    route.post(
        '/create-token',
        decrypt,
        // celebrate({
        //     body: validation.createToken
        // }),
        controller.createToken
    )
}