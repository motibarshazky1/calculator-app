import React from 'react';
import { USER_SIGNED_IN, USER_SIGNED_OUT } from '../types';

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
