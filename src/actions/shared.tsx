import { getInitialData } from '../utils/api';
import { recieveUsers } from '../actions/users';
import { recieveQuestions } from '../actions/questions';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID: string = 'jacksparrow';

export function handleInitialData() {
    return (dispatch: any) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(recieveUsers(users));
                dispatch(recieveQuestions(questions));
                dispatch(setAuthedUser(AUTHED_ID));
            });
    };
}

// TODO: Dispatch function? TS