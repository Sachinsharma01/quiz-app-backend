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
    const quizId = Math.random().toString(36).substring(2,8);
    const body: any = {
      totalQuestions: data.totalQuestions || 0,
      quizId: quizId
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

const fetchAll = async (input: any) => {
  try {
    console.log("fetch all quiz service starts here", input);
    let response = [];
    const quizes = await Quizes.find({ author: input.author });
    console.log("fetch all quiz response in quiz service", quizes);
    if (quizes.length === 0) {
      return {
        message: "no quiz exists, please create one",
        error: true,
      };
    }
    return quizes;
  } catch (err) {
    console.log(err);
    throw new ErrorHandler.BadError("OOPS! Cannot process your request");
  }
};

export default {
  fetchQuiz,
  addQuiz,
  deleteQuiz,
  fetchAll,
};
