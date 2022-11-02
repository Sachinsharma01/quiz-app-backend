import mongoose from "mongoose";

interface quizModelInterface extends mongoose.Document {
  id: number;
  questions: [];
  createdAt: Date;
  updatedAt: Date;
  author: string;
  totalQuestions: number;
  title: string;
}

const quizSchema: any = new mongoose.Schema(
  {
    quizId: {
      type: String,
      required: true,
    },
    questions: {
      type: [],
      required: true,
      default: []
    },
    title: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now()
    },
    author: {
      type: String,
      required: true,
    },
    totalQuestions: {
      type: Number,
      default: 0,
    }
  },
  { collection: "quizes" }
);

export const Quizes = mongoose.model<quizModelInterface>("Quizes", quizSchema);
                                                                                                                                                                                                                                                                                            