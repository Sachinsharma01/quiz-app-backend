import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import config from "./config";
import mongooseConnection from "./loaders/mongoose";
import executeApi from "./api/";
import { errors } from "celebrate";
import swaggerUi from 'swagger-ui-express';
import specs from './swagger';

dotenv.config();
const app: express.Application = express();

const PORT: any = config.port || 3001;

async function startServer() {
  app.use(cors());
  app.use(errors());
  app.use(express.json());

  app.use('/quiz/api' + '/api-docs/', swaggerUi.serve, swaggerUi.setup(specs));

  app.listen(PORT, () => {
    console.log(`######## 🔥 Server Started at ${PORT} 🔥 ########`);
    mongooseConnection();
  });
  executeApi(app);
  return app;
}

const e = startServer();
