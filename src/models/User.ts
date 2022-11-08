import mongoose from "mongoose";

interface userDataInterface extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  quizes: [];
}

const userSchema: any = new mongoose.Schema(
  {
    username: {
      type: String,
      requiured: true,
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
    quizes: {
      type: Array,
      default: [],
    },
    totalQuizes: {
      type: Number,
      default: 0,
    }
  },
  { collection: "users" }
);

export const Users = mongoose.model<userDataInterface>("Users", userSchema);
