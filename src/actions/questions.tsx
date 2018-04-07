import { Question } from '../models/Question';
import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function recieveQuestions(questions: Question[]) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function answerQuestion(qid: string, authedUser: string, answer: string) {
    return (dispatch: any) => {
        return saveQuestionAnswer({qid, authedUser, answer})
            .then(() => {
                dispatch({
                    type: ANSWER_QUESTION,
                    qid,
                    authedUser,
                    answer
                });
            });
    };
}