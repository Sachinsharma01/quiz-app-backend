import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import config from "../config";
import APIResponses from "../config/APIResponses";
import IUserDTO from "../interfaces/IUserDTO";
import { Users } from "../models/User";
const createToken = async (query: IUserDTO) => {
  try {
    console.log("Create Token service start here", query);

    let response: object = {};
    const SECRET_KEY: string = config.secretKey;

    const user: any = await Users.findOne({ email: query.email });
    console.log(user)
    if (!user) {
      console.error("User does not Exist!!");
      response = {
        error: true,
        status: 404,
        message: "user does not found!",
        data: {},
      };
    } else {

      const validPassword: boolean = await compare(
        query.password,
        user.password
      );

      if (!validPassword) {
        console.error("User does not Exist!!");
        response = {
          error: true,
          status: 404,
          message: "Incorrect Password!",
          data: {},
        };
      } else {
        const token: string = sign(
          {
            email: user.email,
            name: user.name,
            salary: user.salary,
            role: user.role,
          },
          SECRET_KEY
        );

        response = {
          error: false,
          status: 200,
          message: "Create token Successful !",
          data: { token },
        };
      }
    }

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default {
  createToken,
};
