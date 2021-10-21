import React from 'react';
import { USER_SIGNED_IN } from '../types';

export const signIn = (userToSignIn) => async (dispatch) => {
	try {
		if (userToSignIn) {
			console.log(userToSignIn);
			dispatch({ type: USER_SIGNED_IN, payload: userToSignIn });
			return userToSignIn;
		} else {
			console.log('could not sign in user: ' + userToSignIn.email);
		}
	} catch (err) {
		console.log('Could not sign in user: ' + err);
		return err;
	}
};
