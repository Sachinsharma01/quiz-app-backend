import mongoose from "mongoose";

interface userDataInterface extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: any = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

export const Users = mongoose.model<userDataInterface>("Users", userSchema);
