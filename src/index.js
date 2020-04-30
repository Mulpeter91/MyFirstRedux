import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; //this is a standalone package
//thunk middleware extend the redux store's abilities, and let you write async logic that interacts with the store.
import thunk from 'redux-thunk'; //https://github.com/reduxjs/redux-thunk
import { Provider } from 'react-redux'; //this package allows you to hook up redux to react : npm install --save react-redux 
//import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer  = combineReducers({
    ctr: counterReducer, 
    res: resultReducer
});

//this is a simple example of middleware
const logger = store => {
    //it returns another function
    return next => {
        //this turn needs ANOTHER function with the action
        return action => {
            console.log('[Middleware] Dispatching', action);
            //this will let the action continue to the reducer, but need to pass the action as an argument
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

// this is a variable which is injected into our application by the Redux DevTools chrome extension into our javaScrpt at run time
// https://github.com/zalmoxisus/redux-devtools-extension
// if it can't be found we will fall back to the default componse from React (though it won't have the Redux DevTools)
// compose combines enhanercs much like combineReducers combines reducers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//this applying middleware is an enhancer, and it can take a list of objects and run in order
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

//Provider is a wrapper which allows us to inject our store into our application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
