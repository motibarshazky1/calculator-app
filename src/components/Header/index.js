import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../actions/userActions';

import './index.css';

const Header = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();

	const { userData } = useSelector((state) => state.user);
	const [selectedHeader, setSelectedHeader] = useState('');

	useEffect(() => {
		// get the selected header from url param
		if (window.location.pathname.includes('history')) {
			setSelectedHeader('history');
		} else {
			setSelectedHeader('calculator');
		}
	}, [location]);

	const onClickNavigate = (navigation) => {
		if (navigation === 'calculator') {
			setSelectedHeader('calculator');
			history.push('/');
		} else {
			// navigation === 'history'
			setSelectedHeader('history');
			history.push('/history');
		}
	};

	const onClickLogout = () => {
		const isLogout = dispatch(signOut());
		localStorage.setItem('userName', '');
		localStorage.setItem('email', '');
		history.push('/login');
	};
	return (
		<div className="header-wrapper">
			<div className="side">
				<div className="navigation-buttons">
					<button
						className={`button calculator ${selectedHeader === 'calculator' ? 'active' : ''}`}
						onClick={() => onClickNavigate('calculator')}
					>
						Calculator
					</button>
					<button
						className={`button history ${selectedHeader === 'history' ? 'active' : ''}`}
						onClick={() => onClickNavigate('history')}
					>
						History
					</button>
				</div>
			</div>
			<div className="side">
				<button className="button logout" onClick={onClickLogout}>
					Logout
				</button>
				<span className="hello-title">Hello {userData.userName}</span>
			</div>
		</div>
	);
};

export default Header;
