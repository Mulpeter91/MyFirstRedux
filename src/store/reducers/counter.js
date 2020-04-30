import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

//this reducer just handles the counter
//dispatches are passed through the assigned reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT: //'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case actionTypes.DECREMENT: //'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case actionTypes.ADD: //'ADD':
            return { ...state, counter: state.counter + action.val }
        case actionTypes.SUBTRACT: //'SUBTRACT':
            return updateObject(state, {
                counter: state.counter - action.val 
            })
            //return { ...state, counter: state.counter - action.val }       
    }
    return state;
};

export default reducer;