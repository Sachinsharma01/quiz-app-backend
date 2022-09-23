import { Router } from "express";
import { celebrate } from "celebrate";
import validation from "./validation";
import controller from "./auth.controller";
import decrypt from "../../middlewares/decrypt";
const route = Router();

export default (app: any) => {
  app.use("/quiz/api/auth", route);
  route.post(
    "/create-token",
    celebrate({
      body: validation.createToken,
    }),
    controller.createToken
  );
};
