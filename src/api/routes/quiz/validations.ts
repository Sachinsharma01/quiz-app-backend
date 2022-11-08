import { Joi } from "celebrate";
export default {
  fetchQuiz: Joi.object().keys({
    quizId: Joi.string().required().length(6),
  }),
  addQuiz: Joi.object({
    title: Joi.string().required(),
    quizId: Joi.string().min(4).max(6).optional(),
    author: Joi.string().required(),
    totalQuestions: Joi.number().optional(),
    questions: Joi.array().optional(),
  }),
  deleteQuiz: Joi.object({
    quizId: Joi.string().required()
  }),
  fetchAll: Joi.object({
    author: Joi.string().alphanum().required(),
  })
};
