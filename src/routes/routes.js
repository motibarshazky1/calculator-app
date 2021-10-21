import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import CalculatorPage from '../pages/CalculatorPage';
import HistoryPage from '../pages/HistoryPage';
import PrivateRoute from './privateRoute';

const Routes = ({ isAuthorized, userData }) => {
	useEffect(() => {}, [isAuthorized]);

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
			<Switch>
				<Route path="/" exact component={CalculatorPage} isAuthorized={isAuthorized} userData={userData} />
				{/* <PrivateRoute path="/" exact component={CalculatorPage} isAuthorized={isAuthorized} userData={userData} /> */}
				<Route path="/login" component={LoginPage} />
			</Switch>
		</div>
	);
};

export default Routes;
