import { Router } from "express";
import { celebrate } from "celebrate";
import validation from "./validation";
import controller from './customer.controller'
const route = Router();

export default (app: any) => {
  app.use("/quiz/api/customer", route);
  route.post(
    "/getMetaData",
    celebrate({
      body: validation.metaData,
    }),
    controller.getMetaData
  );
  route.post(
    "/create-user",
    celebrate({
      body: validation.createUser,
    }),
    controller.createUser
  );
};
