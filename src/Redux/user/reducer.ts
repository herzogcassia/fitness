
const initialState = {
    currentUser: null,
}

const userReducer = (state = initialState, action: { type: string; payload: any; }) => {
    if (action.type === 'USER_LOGIN') {
        return { ...state, currentUser: action.payload}
    }
    if (action.type === 'USER_LOGOUT') {
        return { ...state, currentUser: null}
    }

    return state
}

export default userReducer;

