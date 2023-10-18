import { current } from "@reduxjs/toolkit";

const initialState = {
    currentMode: 'LIGHT'
}

const themeReducer = (state = initialState, action: { type: string; payload: any; }) => {
    if (action.type === 'LIGHT_MODE') {
        return {
            ...state,
            currentMode: 'LIGHT'
        }
    } if (!action.payload?.darkMode) {
        return {
            ...state,
            currentMode: 'DARK'
        }
    }
    return state
}

export default themeReducer;
