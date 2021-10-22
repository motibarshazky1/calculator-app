import { TOGGLE_MODAL_VISIBILITY } from '../types';

const initialState = {
	error: '',
	isModalOpen: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case TOGGLE_MODAL_VISIBILITY:
			return { ...state, error: payload.error, isModalOpen: payload.isModalOpen };
		default:
			return state;
	}
};
