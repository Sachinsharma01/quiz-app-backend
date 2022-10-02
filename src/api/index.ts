import { Router } from "express"
import auth from "./routes/auth";
import customer from "./routes/customer"

export default (app:any) =>{ 
    auth(app);
    customer(app);
}