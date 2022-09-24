import { NextFunction, Request, Response } from "express";
import APIResponses from "../../../config/APIResponses";
import IUserDTO from "../../../interfaces/IUserDTO";
import Customer from "../../../services/Customer";

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
        APIResponses.badRequest(res, response.message, response);
      }

      APIResponses.success(res, response.message, response);
    } catch (err) {
      APIResponses.internalServerError(res, "breaked", {});
    }
  },
};
