import { ANSWER_QUESTION } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case ANSWER_QUESTION:
            return action.payload;
        default:
            return state;
    }
};