// import * as actionTypes from './actions';

// ------------------------------------------------- THIS REDUCDER WAS SPLIT OVER TWO REDUCERS ---------------------------

// const initialState = {
//     counter: 0, 
//     results: []
// };

// //dispatches are passed through the assigned reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case actionTypes.INCREMENT: //'INCREMENT':
//             return { ...state, counter: state.counter + 1 }
//         case actionTypes.DECREMENT: //'DECREMENT':
//             return { ...state, counter: state.counter - 1 }
//         case actionTypes.ADD: //'ADD':
//             return { ...state, counter: state.counter + action.val }
//         case actionTypes.SUBTRACT: //'SUBTRACT':
//             return { ...state, counter: state.counter - action.val }
//         case actionTypes.STORE_RESULT: //'STORE_RESULT':
//             return {
//                 ...state, //making it immutable by cloning the existing state. Effectively called Object.assign({}, state);
//                 results: state.results.concat({ //don't use push because it's making the state mutable
//                     id: new Date(), 
//                     value: state.counter,
//                 }) 
//             }
//         case actionTypes.DELETE_RESULT: //'DELETE_RESULT':
//             // const id = 2;
//             // const newArray = [...state.results];
//             // newArray.splice(id, 1);
//             const updatedArray = state.results.filter((result) =>  result.id !== action.resultElId); //filter is immutable because it creates a new array
//             return {
//                 ...state,
//                 results: updatedArray
//             }     
//     }
//     return state;
// };

// export default reducer;