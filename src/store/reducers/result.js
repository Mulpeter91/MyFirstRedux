import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((result) =>  result.id !== action.resultElId); //filter is immutable because it creates a new array
    return updateObject(state, { results: updatedArray }); 
}

//dispatches are passed through the assigned reducer
//you can not run asynchronous code inside the reducer
const reducer = (state = initialState, action) => {
    console.log('[reducer_results]');
    console.log(action);
    switch(action.type){
        case actionTypes.STORE_RESULT: //'STORE_RESULT':
            return updateObject (state, {results: state.results.concat({id: new Date(), value: action.counter})});
            //{
            //...state, //making it immutable by cloning the existing state. Effectively called Object.assign({}, state);
            //results: state.results.concat({ //don't use push because it's making the state mutable
            //    id: new Date(), 
            //    value: action.counter, //notice the counter is still here. 
            //})            
        case actionTypes.DELETE_RESULT: return deleteResult(state, action); //'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);            
            // const updatedArray = state.results.filter((result) =>  result.id !== action.resultElId); //filter is immutable because it creates a new array
            // return updateObject(state, {results: updatedArray});
            // return {
            //     ...state,
            //     results: updatedArray
            // }    
    }
    return state;
};

export default reducer;