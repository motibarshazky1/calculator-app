import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signIn } from '../../actions/userActions';

import './index.css';

const LoginPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setError('');
		}, 3000);
	}, [error]);

	const onChangeFormInput = (e) => {
		if (e.target.name === 'username') {
			setUserName(e.target.value);
		} else {
			setEmail(e.target.value.trim());
		}
	};

	const validateEmail = () => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const onClickLogin = () => {
		if (userName && email && validateEmail(email)) {
			const userToSignIn = { userName, email };
			const isSignedIn = dispatch(signIn(userToSignIn));
			if (isSignedIn) {
				localStorage.setItem('userName', userToSignIn.userName);
				localStorage.setItem('email', userToSignIn.email);
				history.push('/');
			} else {
				setError('Error While Trying To Login! Please Try Again.');
			}
		} else {
			setError('Form Is Not Valid.');
		}
	};

	return (
		<div className="login-wrapper">
			{error && <div>{error}</div>}
			<h2 className="login-title">Login</h2>
			<div className="form">
				<div className="row">
					<label>User Name</label>
					<input
						type="text"
						placeholder="enter your username"
						name="username"
						value={userName}
						onChange={(e) => onChangeFormInput(e)}
					/>
				</div>
				<div className="row">
					<label>Email</label>
					<input
						type="text"
						placeholder="enter your email"
						name="email"
						value={email}
						onChange={(e) => onChangeFormInput(e)}
					/>
				</div>
				<div className="row">
					<button onClick={onClickLogin}>LOG IN</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
