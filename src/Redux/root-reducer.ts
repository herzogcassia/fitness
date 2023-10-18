import { combineReducers } from "redux";
import userReducer from './user/reducer';
import themeReducer from "./theme/reducer";


const rootReducer = combineReducers({userReducer, themeReducer})

export default rootReducer;