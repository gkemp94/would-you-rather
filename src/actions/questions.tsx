import { Question } from '../models/Question';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function recieveQuestions(questions: Question[]) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}