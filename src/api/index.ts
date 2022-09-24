import { Router } from "express"
import auth from "./routes/auth";

export default (app:any) =>{ 
    auth(app);
}