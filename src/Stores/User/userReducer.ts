import { CLEAR_USER, SET_USER, SetUserActionTypes } from './types'

const userReducer = (
    state = { acessToken: false },
    action: SetUserActionTypes,
) => {
    switch (action.type) {
        case SET_USER:
            return { ...action.payload };

        case CLEAR_USER:
            return state

        default:
            return state;
            break;
    }
}