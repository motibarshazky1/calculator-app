import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import { USER_SIGNED_IN } from './types';

const App = () => {
	const dispatch = useDispatch();

	const { userData } = useSelector((state) => state.user);

	useEffect(() => {
		const token = localStorage.getItem('myData');
		if (token) {
			dispatch({ type: USER_SIGNED_IN, payload: userData });
		}
	}, []);

	return (
		<div className="App" style={{ height: '100%' }}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);
};

export default App;
