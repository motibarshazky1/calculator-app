import { TOGGLE_MODAL_VISIBILITY } from '../types';
import store from '../store';

export const toggleModal = (error) => async (dispatch) => {
	try {
		if (error) {
			// open modal with error
			dispatch({ type: TOGGLE_MODAL_VISIBILITY, payload: { error: error, isModalOpen: true } });
		} else {
			// error is empty - close modal
			dispatch({ type: TOGGLE_MODAL_VISIBILITY, payload: { error: '', isModalOpen: false } });
		}
		return true;
	} catch (err) {
		console.log('could not open modal', err);
		return false;
	}
};
