import React from 'react';
import { useSelector } from 'react-redux';

import './index.css';

const Header = () => {
	const { userData } = useSelector((state) => state.user);
	return (
		<div className="header-wrapper">
			<div className="left-side">
				<div className="navigation-buttons">
					<button>Calculator</button>
					<button>History</button>
				</div>
			</div>
			<div className="right-side">
				<button className="logout-button">Logout</button>
				<span className="hello-title">Hello {userData.userName}</span>
			</div>
		</div>
	);
};

export default Header;
