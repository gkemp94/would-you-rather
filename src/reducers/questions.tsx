import { RECEIVE_QUESTIONS, ANSWER_QUESTION, SAVE_QUESTION } from '../actions/questions';

export default function questions(state: any = {}, action: any) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_QUESTION:
            state[action.qid][action.answer].votes.push(action.authedUser);
            return {
                ...state,
            };
        case SAVE_QUESTION:
            
            return {
                ...state,
                [action.info.id]: action.info
            };
        default: 
            return state;
    }
}