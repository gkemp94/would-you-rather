import { RECEIVE_USERS } from '../actions/users';

export default function users(state: any = {}, action: any) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        default: 
            return state;
    }
}

// TODO: TS