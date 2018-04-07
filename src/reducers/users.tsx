import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_QUESTION } from '../actions/questions';

export default function users(state: any = {}, action: any) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ANSWER_QUESTION:
            state[action.authedUser].answers[action.qid] = action.answer;
            return {
                ...state,
            };
        default: 
            return state;
    }
}

// TODO: TS