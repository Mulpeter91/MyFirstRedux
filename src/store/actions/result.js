import * as actionTypes from './actionTypes';

export const saveResult = (payload) => {  
    return {
        type: actionTypes.STORE_RESULT,
        counter: payload
    };
}

// action creators is the best practice place to make async calls, such as to an API / web server etc 
export const storeResult = (payload) => {
    const updatedResult = payload * 2; //you can add more logic in here but it should really be the responsbility of the REDUCER to fix amend state: this is pereference but makes sense
    //middleware runs between the dispatch of an action and the point of time it reaches the reducer
    //if you look at the logger middleware in index.js you can see the reducer has access to that action and can pause, stop, edit etc
    return (dispatch, getState) => {
        setTimeout(() => {
            //this is here just to show that you get state
            //but again, ideally you wouldn't do this. 
            //you'd pass what you need from state a variable from the component, which in turn will only have access to what is SHOULD have access to.
            const oldCounter = getState().ctr.counter; 
            console.log('[store result]', oldCounter);
            // if you passed storeResult it would cause an infinite loop
            dispatch(saveResult(updatedResult));
        }, 3000);
    }
}; 

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
}; 