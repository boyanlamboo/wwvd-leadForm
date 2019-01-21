import { combineReducers } from "redux";

import data from "./dataReducer";
import question from "./questionReducer";

export default combineReducers({
    data,
    question
});