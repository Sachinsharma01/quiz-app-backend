import mongoose from "mongoose";
// import { Db } from "mongodb";
import config from "../config";

export default async (): Promise<any> => {
  const DB_URL: any = config.databaseURL;
  let connection: any;
  try {
    connection = await mongoose
      .connect(DB_URL, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
      })
      .then(() => {
        console.log("Database Connected")
      });
  } catch (err) {
    console.error(err);
  }

  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  // console.log(connection)
  // return connection.connection.db; 
};
