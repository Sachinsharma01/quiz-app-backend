import { Router } from "express";
import { celebrate } from "celebrate";
import validation from "./validation";
import controller from './customer.controller'
import isAuthorized from '../../middlewares/decrypt';
const route = Router();

export default (app: any) => {
  app.use("/quiz/api/customer", route);
  /**
   * @swagger
   *  securityDefinitions:
   *    Bearer:
   *      type: apiKey
   *      name: Authorization
   * /quiz/api/customer/getMetaData:
   *   post:
   *     tags:
   *       - Customer
   *     summary: Used to get the data about the token / user
   *     description: Used to get the data about the token / user
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: body to get the meta data.
   *         in: body
   *         required: true
   *         schema:
   *           type: string
   *           properties:
   *              token:
   *                type: string
   *                description: token to get the details
   *           required:
   *             - token
   *     responses:
   *       200:
   *         description: producecs a success response
   *       500:
   *         description: producecs a success response
   *       400:
   *         description: producecs a success response
   */
  route.post(
    "/getMetaData",
    // isAuthorized,
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
