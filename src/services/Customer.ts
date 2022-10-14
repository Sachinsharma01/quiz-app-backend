import ITokenDTO from "../interfaces/ITokenDTO";
import ErrorHandler from "../config/Error";
import { verify } from "jsonwebtoken";
import { hash } from "bcryptjs";
import config from "../config";
import { Users } from "../models/User";
import { IUserDTO, IUserValidation } from "../interfaces/IUserDTO";
const SECRET_KEY = config.secretKey;
const getMetaData = async (query: ITokenDTO) => {
  console.log("getMetaData service started here!");
  try {
    let response: {} = {};
    const token: string = query?.token;
    if (!token) {
      throw new ErrorHandler.BadError("Token does not exists!");
    }
    const verifyToken: any = verify(token, SECRET_KEY);
    console.log(verifyToken);
    const user: any = await Users.findOne({
      useerName: verifyToken.name,
      email: verifyToken.email,
    });
    if (!user) {
      response = {
        message: "User deos not exist!",
      };
    } else {
      response = {
        username: user.username,
        email: user.email,
        quizes: user?.quizes,
      };
    }
    console.log(user);
    return response;
  } catch (err) {
    console.log(err);
    throw new ErrorHandler.BadError("getMetaData service end with error!");
  }
};
const createUser = async (input: IUserDTO) => {
  try {
    console.log("Create user Service starts here!", input);
    let response: any = {};
    const userNameExist = await Users.findOne({
      username: input.username,
    });
    const userEmailExist = await Users.findOne({
      email: input.email,
    });
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", userNameExist);
    if (userNameExist) {
      response = {
        message: "username already Exists!",
      };
    } else if(userEmailExist) {
        response = {
          message: "email already Exists!",
        };
    } else {
      const hashedPassword: string = await hash(input.password, 15);
      const created: any = await Users.create({
        email: input.email,
        password: hashedPassword,
        username: input.username,
      });
      response = {
        mesasge: "user created successfully",
        data: {
          email: created.email,
          username: created.username,
        },
      };
    }
    return response;
  } catch (error) {
    console.log("Error in crearte user service", error);
    throw new ErrorHandler.BadError("Error in create user ");
  }
};
export default {
  getMetaData,
  createUser,
};
