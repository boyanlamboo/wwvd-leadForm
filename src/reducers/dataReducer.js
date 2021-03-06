import { FETCH_LEADS } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LEADS:
            return action.payload;
        default:
            return state;
    }
};