import { NextFunction, Request, Response } from "express";
import Quiz from "../../../services/quiz";
import APIResponses from "../../../config/APIResponses";

export default {
  fetchQuiz: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("fetch quiz api start here with query", req.query);
      const result: any = await Quiz.fetchQuiz(req.query);
      console.log("fetch quiz api response", result);
      return APIResponses.success(res, "Quiz successfully fetched", result);
    } catch (err) {
      console.log(err);
      return APIResponses.badRequest(res, "OOPS! Cannot fetch the quiz ", {});
    }
  },
  addQuiz: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Add Quiz api start here with body", req.body);
      const result: any = await Quiz.addQuiz(req.body);
      console.log("add quiz api response", result);
      APIResponses.success(res, "Quiz added Successfully!", result);
    } catch (err) {
      console.log(err);
      return APIResponses.badRequest(
        res,
        "OOPS! Cannot add the quiz now, come back later ",
        {}
      );
    }
  },
  deleteQuiz: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Delete Quiz api start here with query", req.query);
      const result: any = await Quiz.deleteQuiz(req.query);
      console.log("delete quiz api response", result);
      return APIResponses.success(res, "Quiz deleted Successfully!", result);
    } catch (err) {
      console.log(err);
      return APIResponses.badRequest(
        res,
        "OOPS! Cannot delete the quiz now, come back later ",
        {}
      );
    }
  },
  fetchAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Fetch all Quiz api start here with query");
      const result: any = await Quiz.fetchAll(req.query);
      console.log("delete quiz api response", result);
      if (result.error) {
        return APIResponses.badRequest(res, result.message, {});
      } else {
        return APIResponses.success(
          res,
          "All Quiz fetched successfully",
          result
        );
      }
    } catch (err) {
      console.log(err);
      return APIResponses.badRequest(
        res,
        "OOPS! Cannot delete the quiz now, come back later ",
        {}
      );
    }
  },
};
