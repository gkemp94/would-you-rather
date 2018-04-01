import { User } from '../models/User';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function recieveUsers(users: User[]) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}