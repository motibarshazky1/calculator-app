import { USER_SIGNED_IN, USER_SIGNED_OUT } from '../types';

const initialState = {
	userData: null,
	isAuthorized: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_SIGNED_IN:
			return { ...state, userData: payload, isAuthorized: true };
		case USER_SIGNED_OUT:
			return { ...state, userData: null, isAuthorized: false };
		default:
			return state;
	}
};
