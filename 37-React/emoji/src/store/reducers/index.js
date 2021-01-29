import { combineReducers } from 'redux';
import { dataReducer } from './data';
import { formReducer } from './form';

export const rootReducer = combineReducers({
	data: dataReducer,
	form: formReducer,
})
