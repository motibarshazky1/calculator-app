import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../../components/AppModal';
import { signOut } from '../../actions/userActions';
import { onCloseModal } from '../../utils';

import './index.css';

const Header = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();

	const { userData, userClicks } = useSelector((state) => state.user);
	const [selectedHeader, setSelectedHeader] = useState('');
	const [error, setError] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

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
		if (isLogout) {
			localStorage.setItem('userName', '');
			localStorage.setItem('email', '');
			history.push('/login');
		} else {
			setError('Could Not Sign Out! Please Try Again');
			setIsModalOpen(true);
		}
	};
	return (
		<div className="header-wrapper">
			{error && isModalOpen && (
				<Modal open={isModalOpen} onClose={() => onCloseModal(setIsModalOpen, setError)} error={error} />
			)}
			<div className="side">
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
