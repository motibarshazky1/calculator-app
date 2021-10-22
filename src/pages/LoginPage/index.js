import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Modal from '../../components/AppModal';
import { signIn } from '../../actions/userActions';

import './index.css';
import { toggleModal } from '../../actions/envActions';

const LoginPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { userData, isAuthorized } = useSelector((state) => state.user);
	const { error, isModalOpen } = useSelector((state) => state.environment);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (userData && isAuthorized) {
			history.push('/');
		}
	}, [userData, isAuthorized]);

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
		let errorMessage;
		if (userName && email && validateEmail(email)) {
			const userToSignIn = { userName, email };
			const isSignedIn = dispatch(signIn(userToSignIn));
			if (isSignedIn) {
				localStorage.setItem('userName', userToSignIn.userName);
				localStorage.setItem('email', userToSignIn.email);
				history.push('/');
			} else {
				errorMessage = 'Error While Trying To Login! Please Try Again';
			}
		} else if (!userName) {
			errorMessage = 'Please Enter User Name';
		} else if (!email) {
			errorMessage = 'Please Enter Email';
		} else if (!validateEmail(email)) {
			errorMessage = 'Email Is Not Valid';
		}
		if (errorMessage) {
			// error in form - open modal with the error
			dispatch(toggleModal(errorMessage));
		}
	};

	const onCloseModal = () => {
		dispatch(toggleModal());
	};

	return (
		<div className="login-wrapper">
			{error && isModalOpen && <Modal open={isModalOpen} onClose={onCloseModal} error={error} />}
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
