import { USER_SIGNED_IN } from '../types';

const initialState = {
	userData: null,
	isAuthorized: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_SIGNED_IN:
			return { ...state, userData: payload, isAuthorized: true };
		default:
			return state;
	}
};
