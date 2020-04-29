//This file is created to highlight that redux can be implemented independent of the application
//Things that will be needed: Store, Reducer, Dispacthing Action, Subscription

const redux = require('redux'); //this is going to run with node js first to keep it isolated
const createSotre = redux.createStore;
const initialState = {
    counter: 0
};


//Reducrer -------------
//reducer gets the state(current), and the action and must return the updated state to work
//this sets initialState as default if null
const rootReducer = (state = initialState, action) => {

    if(action.type === 'INC_COUNTER'){
        //this creates a NEW state, it doesn't change the existing one. It is important for maintenance to keep it immutable
        return {
            ...state, 
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        //this creates a NEW state, it doesn't change the existing one. It is important for maintenance to keep it immutable
        return {
            ...state, 
            counter: state.counter + action.value
        };
    }

    return state;
};


//Store -------------
//a store needs to be initialized with a reducer.
//because the reducer is the only thing that is able to update the store(state)
//you can have multilpe reducers but they must connect back to one parent
const store = createSotre(rootReducer);
console.log(store.getState()); //run node redux-basics.js inside directory


//Subscriptions -------------
//this triggers whenever an action is dispatched from the store, ie when the stat is updated 
store.subscribe(() => {
    console.log('[Subscription', store.getState());
});


//Dispatching Action -------------
//the type is important for the redux flow to understand how to handle dispatch types
store.dispatch({
    type: 'INC_COUNTER' //convention is uppper case
});
//you can add any other props as you like
store.dispatch({
    type: 'ADD_COUNTER', 
    value: 10
});

console.log(store.getState());
