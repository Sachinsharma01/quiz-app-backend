import { NextFunction, Request, Response } from "express";
import APIResponses from "../../../config/APIResponses";
import IUserDTO from "../../../interfaces/IUserDTO";
import Customer from "../../../services/Customer";
import ErrorHandler from "../../../config/Error";

export default {
  createToken: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Create Token controller starts here", req.body);

      const userData: IUserDTO = {
        username: req.body?.username,
        email: req.body?.email,
        password: req.body?.password,
      };
      const response: any = await Customer.createToken(userData);

      if (response.error) {
        return APIResponses.badRequest(res, response.message, response);
      }

      return APIResponses.success(res, response.message, response);
    } catch (err) {
      if (err instanceof ErrorHandler.BadError) {
        console.log("auth Create Token end with error");
        throw err;
      }
      return APIResponses.badRequest(res, "OOPS! Some Error Occured", {});
    }
  },
};
