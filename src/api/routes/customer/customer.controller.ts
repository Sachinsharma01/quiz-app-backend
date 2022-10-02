import { NextFunction, Request, Response } from "express";
import APIResponses from "../../../config/APIResponses";
import Customer from "../../../services/customer";
import { Users } from "../../../models/User";
import { hash } from "bcryptjs";
export default {
  getMetaData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.info("Customer API getMetaData starts here with body", req.body);

      const token: any = req.body.token;
      const response: object = await Customer.getMeatData(req.body);

      APIResponses.success(res, "Get Meta Successfully fetched", response);
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.info("Customer API createUser starts here", req.body);
      const hashedPass:string = await hash(req.body.password, 10);
      const created : any = await Users.create({
        email: req.body.email,
        password: hashedPass,
        username: req.body.username,
      });
      console.log('user created', created);
      return APIResponses.success(
        res,
        "User registered Successfully",
        created
      );
    } catch (err) {
      console.log(err);
    }
  },
};
