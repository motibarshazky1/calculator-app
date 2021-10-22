import { USER_SIGNED_IN, USER_SIGNED_OUT, ADD_USER_CLICK, CLEAR_USER_CLICKS_HISTORY } from '../types';
import store from '../store';

export const signIn = (userToSignIn) => async (dispatch) => {
	try {
		if (userToSignIn) {
			console.log(userToSignIn);
			dispatch({ type: USER_SIGNED_IN, payload: userToSignIn });
			return true;
		} else {
			console.log('could not sign in user: ' + userToSignIn.email);
			return false;
		}
	} catch (err) {
		console.log('could not sign out user', err);
		return false;
	}
};

export const signOut = () => async (dispatch) => {
	try {
		dispatch({ type: USER_SIGNED_OUT });
		return true;
	} catch (err) {
		console.log('could not sign out user', err);
		return false;
	}
};

export const addUserClick = (keyPressed, newInput) => async (dispatch) => {
	try {
		const { userClicks: allUserClicks } = store.getState().user;
		const newUserClicks = [...allUserClicks];
		if (newUserClicks.length === 20) {
			// length is 20 - remove first click and insert at the end the last one that was just clicked
			newUserClicks.shift();
		}
		newUserClicks.push(keyPressed);
		dispatch({ type: ADD_USER_CLICK, payload: { newUserClicks, newInput } });
		return true;
	} catch (err) {
		console.log('could not add user click', err);
		return false;
	}
};

export const clearUserClicksHistory = () => async (dispatch) => {
	try {
		dispatch({ type: CLEAR_USER_CLICKS_HISTORY });
		return true;
	} catch (err) {
		console.log('could not clear user clicks history', err);
		return false;
	}
};
