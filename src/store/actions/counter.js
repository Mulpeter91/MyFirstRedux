import * as actionTypes from './actionTypes';

//this is an action creator, as previously done in the counter.js file itself 
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
}; 

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
}; 

export const add = (payload) => {
    return {
        type: actionTypes.ADD,
        val: payload
    };
}; 

export const subtract = (payload) => {
    return {
        type: actionTypes.SUBTRACT,
        val: payload
    };
}; 