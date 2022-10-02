import ITokenDTO from "../interfaces/ITokenDTO";
import ErrorHandler from "../config/Error";
import { verify } from "jsonwebtoken";
import config from "../config";
const getMeatData = (query: ITokenDTO) => {
  console.log("getMetaData service started here!");
  try {
    const token: string = query?.token;

    if (!token) {
      throw new ErrorHandler.BadError("Token is does not exists!");
    }

    const SECRET_KEY = config.secretKey;
    const verifyToken: any = verify(token, SECRET_KEY);
    console.log(verifyToken);
    return verifyToken;
  } catch (err) {
    console.log("getMetaData service end with error!");
    console.log(err);
  }
};

export default {
  getMeatData,
};
