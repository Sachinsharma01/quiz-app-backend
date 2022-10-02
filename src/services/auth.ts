import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import config from "../config";
import ErrorHandler from "../config/Error";
import IUserDTO from "../interfaces/IUserDTO";
import { Users } from "../models/User";
const createToken = async (query: IUserDTO) => {
  try {
    console.log("Create Token service start here", query);

    let response: object = {};
    const SECRET_KEY: string = config.secretKey;

    const user: any = await Users.findOne({
      email: query.email,
      username: query.username,
    });
    console.log(user);
    if (!user) {
      console.error("User does not Exist!!");
      response = {
        error: true,
        message: "user does not found!",
        data: {},
      };
    } else {
      const validPassword: boolean = await compare(
        query.password,
        user.password
      );

      if (!validPassword) {
        console.error("Password is incorrect!");
        response = {
          error: true,
          message: "Incorrect Password!",
          data: {},
        };
      } else {
        const token: string = sign(
          {
            email: user.email,
            username: user.username,
          },
          SECRET_KEY
        );

        response = {
          error: false,
          message: "Create token Successful !",
          data: { token },
        };
      }
    }

    return response;
  } catch (err) {
    console.error("Error in CUSTOMER service");
    const info = new Date().getTime();
    throw new ErrorHandler.BadError(info + "Customer service end with error");
  }
};

export default {
  createToken,
};
