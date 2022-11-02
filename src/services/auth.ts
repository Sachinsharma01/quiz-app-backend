import { compare } from "bcryptjs";
import { sign, verify } from 'jsonwebtoken';
import config from "../config";
import ErrorHandler from "../config/Error";
import ITokenDTO from "../interfaces/ITokenDTO";
import {IUserDTO, IUserValidation} from "../interfaces/IUserDTO";
import { Users } from "../models/User";
const createToken = async (input: IUserDTO) => {
  try {
    console.log("Create Token service start here", input);

    let response: object = {};
    const SECRET_KEY: string = config.secretKey;

    const user: any = await Users.findOne({
      email: input.email,
      username: input.username,
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
        input.password,
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
        console.log("Token generated successfully in auth services", response)
      }
    }

    return response;
  } catch (err) {
    console.error("Error in CUSTOMER service");
    const info = new Date().getTime();
    throw new ErrorHandler.BadError(info + "Customer service end with error");
  }
};

// const ssIsAuth = async (input: ITokenDTO) => {
//   const decryptToken: any = verify(input.token, config.secretKey);
//   const user: any = await Users.findOne({
//     email: decryptToken.email,
//     username: decryptToken.username,
//   })
//   console.log(user);
// }


export default {
  createToken,
};
