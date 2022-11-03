import { Router } from 'express';
import { celebrate } from 'celebrate';
import validations from './validations';
import quizController from './quiz.controller';
import isAuthorized from '../../middlewares/decrypt';

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
    route.get(
        '/fetch-all',
        isAuthorized,
        quizController.fetchAll,
    )
    route.post(
        '/add-quiz',
        isAuthorized,
        celebrate({
            body: validations.addQuiz,
        }),
        quizController.addQuiz,
    );
    route.delete(
        '/delete-quiz',
        isAuthorized,
        celebrate({
            query: validations.deleteQuiz,
        }),
        quizController.deleteQuiz
    )
}