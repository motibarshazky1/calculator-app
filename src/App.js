import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Header from './components/Header';
import { USER_SIGNED_IN } from './types';

const App = () => {
	const dispatch = useDispatch();

	const { userData, isAuthorized } = useSelector((state) => state.user);

	useEffect(() => {
		const userName = localStorage.getItem('userName');
		const email = localStorage.getItem('email');
		console.log(userName, email);
		if (userName && email) {
			dispatch({ type: USER_SIGNED_IN, payload: { userName, email } });
		}
	}, []);

	return (
		<div className="App" style={{ height: '100%' }}>
			<BrowserRouter>
				{userData && isAuthorized && <Header />}
				<Routes userData={userData} isAuthorized={isAuthorized} />
			</BrowserRouter>
		</div>
	);
};

export default App;
