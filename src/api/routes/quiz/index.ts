import { Router } from 'express';
import { celebrate } from 'celebrate';
import validations from './validations';
import quizController from './quiz.controller';

const route = Router();
export default (app: any) => {
    app.use('/quiz/api/quiz', route);
    route.get(
        '/fetch-quiz',
        celebrate({
            query: validations.fetchQuiz,
        }),
        quizController.fetchQuiz,
    );
    route.post(
        '/add-quiz',
        celebrate({
            body: validations.addQuiz,
        }),
        quizController.addQuiz,
    );
    route.delete(
        '/delete-quiz',
        celebrate({
            query: validations.deleteQuiz,
        }),
        quizController.deleteQuiz
    )
}