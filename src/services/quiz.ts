import { Quizes } from "../models/Quiz";
import ErrorHandler from "../config/Error";

const fetchQuiz = async (input: any) => {
  try {
    console.log("fetch quiz service starts here", input);
    const result = await Quizes.findOne({ quizId: input.quizId });
    let response = {};
    if (!result) {
      throw new ErrorHandler.BadError("fetch Quiz service end with error!");
    }
    console.log("fetch quiz service response here", result);
    return result;
  } catch (err) {
    console.log(err);
    throw new ErrorHandler.BadError(
      "OOPS! We cannot process your resquest now"
    );
  }
};

const addQuiz = async (data: any) => {
  try {
    console.log("add quiz service start here", data);
    const body: any = {
      totalQuestions: data.totalQuestions || 0,
    };
    const query: any = { ...data, ...body };
    const result: any = await Quizes.create(query);
    if (result.errors) {
      throw new ErrorHandler.BadError("add Quiz service end with error!");
    }
    console.log("add quiz service response here", result);
    let response = {
      quizId: result.quizId,
    };
    return response;
  } catch (err) {
    console.log(err);
    throw new ErrorHandler.BadError(
      "OOPS! We cannot process your resquest now"
    );
  }
};

const deleteQuiz = async (input: any) => {
  try {
    console.log("Delete quiz service starts here", input);
    let response = {};
    const exists = await Quizes.findOne({ quizId: input.quizId });
    if (!exists) {
      response = {
        error: true,
        message: `Quiz does not exits with this ${input.quizId} quizId`,
      };
      return response;
    }
    const result = await Quizes.deleteOne({ quizId: input.quizId });
    return result;
  } catch (err) {
    console.log(err);
    throw new ErrorHandler.BadError("OOPS! We cannot process your request now");
  }
};

export default {
  fetchQuiz,
  addQuiz,
  deleteQuiz,
};
