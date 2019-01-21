import { leadsRef } from '../components/Firebase/firebase';
import { FETCH_LEADS, ANSWER_QUESTION } from "./types";

export const answerQuestion = question => async dispatch => {
    dispatch({
        type: ANSWER_QUESTION,
        payload: question.answer.value
    })
}

export const addLead = newLead => async dispatch => {
    leadsRef.push().set(newLead);
};

export const fetchLeads = () => async dispatch => {
    leadsRef.on("value", snapshot => {
        dispatch({
            type: FETCH_LEADS,
            payload: snapshot.val()
        });
    });
};