import React from 'react';
import { USER_SIGNED_IN } from '../types';

export const signIn = (userToSignIn) => async (dispatch) => {
	if (userToSignIn) {
		console.log(userToSignIn);
		dispatch({ type: USER_SIGNED_IN, payload: userToSignIn });
		return true;
	} else {
		console.log('could not sign in user: ' + userToSignIn.email);
		return false;
	}
};
