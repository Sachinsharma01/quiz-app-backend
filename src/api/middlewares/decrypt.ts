import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";
import ErrorHandler from "../../config/Error";
import APIResponses from "../../config/APIResponses";
import config from "../../config";

const isAuthorized = (req: any, res: Response, next: NextFunction) => {
  console.log("decrypt token starts here with token", req.headers);
  const token: any = req.headers.authorization;
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%", token);
  if (!token) {
    APIResponses.unAuthorized(res, "Access Denied Unauthorized access", {});
  }
  try {
    const verified: any = verify(token, config.secretKey);
    if (verified) {
      req.verified = {
        verified: true
      }
    }
    next();
  } catch (err) {
    console.log(err);
    throw new ErrorHandler.BadError(
      "OOPS! We cannot process the token request this moment"
    );
  }
};

export default isAuthorized;
