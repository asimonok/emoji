import { createStore } from 'redux';
import { rootReducer } from './reducers';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, undefined, ReactReduxDevTools);
