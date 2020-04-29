import * as actionTypes from '../actions';

const initialState = {
    results: []
};

//dispatches are passed through the assigned reducer
const reducer = (state = initialState, action) => {
    console.log('[reducer_results]');
    console.log(action);
    switch(action.type){
        case actionTypes.STORE_RESULT: //'STORE_RESULT':
            return {
                ...state, //making it immutable by cloning the existing state. Effectively called Object.assign({}, state);
                results: state.results.concat({ //don't use push because it's making the state mutable
                    id: new Date(), 
                    value: action.counter, //notice the counter is still here. 
                }) 
            }
        case actionTypes.DELETE_RESULT: //'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter((result) =>  result.id !== action.resultElId); //filter is immutable because it creates a new array
            return {
                ...state,
                results: updatedArray
            }     
    }
    return state;
};

export default reducer;