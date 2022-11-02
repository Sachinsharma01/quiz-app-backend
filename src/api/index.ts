import { Router } from "express"
import auth from "./routes/auth";
import customer from "./routes/customer"
import quiz from "./routes/quiz";

export default (app:any) =>{ 
    auth(app);
    customer(app);
    quiz(app);
}