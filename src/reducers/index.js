import { combineReducers } from 'redux';

import userReducer from './userReducer';
import envReducer from './envReducer';

export default combineReducers({
	user: userReducer,
	environment: envReducer,
});
