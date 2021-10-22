import { ADD_USER_CLICK, USER_SIGNED_IN, USER_SIGNED_OUT, CLEAR_USER_CLICKS_HISTORY } from '../types';

const initialState = {
	userData: null,
	isAuthorized: false,
	userClicks: [],
	userCalcInput: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_SIGNED_IN:
			return { ...state, userData: payload, isAuthorized: true };
		case USER_SIGNED_OUT:
			return { ...state, userData: null, isAuthorized: false, userClicks: [], userCalcInput: '' };
		case ADD_USER_CLICK:
			return { ...state, userClicks: payload.newUserClicks, userCalcInput: payload.newInput };
		case CLEAR_USER_CLICKS_HISTORY:
			return { ...state, userClicks: [] };
		default:
			return state;
	}
};
