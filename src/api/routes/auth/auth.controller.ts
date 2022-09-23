import { NextFunction, Request, Response } from "express";

export default {
  createToken: async (req: Request, res: Response, next: NextFunction) => {
    console.log("Auth Hit");
    res.status(200).json({ error: "false", message: "connect successfully" });
  },
};
