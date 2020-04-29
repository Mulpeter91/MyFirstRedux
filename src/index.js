import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'; //this is a standalone package
import { Provider } from 'react-redux'; //this package allows you to hook up redux to react : npm install --save react-redux 
//import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/results';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer  = combineReducers({
    ctr: counterReducer, 
    res: resultReducer
});
const store = createStore(rootReducer);

//Provider is a wrapper which allows us to inject our store into our application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
