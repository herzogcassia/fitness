export const SET_USER = 'SET_USER';

export const CLEAR_USER = 'CLEAR_USER';   

interface setUserAction {
    type: typeof SET_USER;
    payload: any;
};

interface clearUserAction {
    type: typeof CLEAR_USER;
    payload: any;
}

export type SetUserActionTypes = setUserAction | clearUserAction;
