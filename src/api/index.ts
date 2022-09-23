import { Router } from "express"
import auth from "./routes/auth";

export default (app:any) =>{ 
    app.use('/quiz/api/auth', auth)
}