import { getInitialData } from '../utils/api';
import { recieveUsers } from '../actions/users';
import { recieveQuestions } from '../actions/questions';

export function handleInitialData() {
    return (dispatch: any) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(recieveUsers(users));
                dispatch(recieveQuestions(questions));
            });
    };
}

// TODO: Dispatch function? TS