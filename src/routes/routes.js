import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import CalculatorPage from '../pages/CalculatorPage';
import HistoryPage from '../pages/HistoryPage';
import PrivateRoute from './privateRoute';

const Routes = () => {
	const { isAuthorized, userData } = useSelector((state) => state.user);
	useEffect(() => {}, [isAuthorized]);
	return (
		<div>
			<Switch>
				<PrivateRoute path="/" exact component={CalculatorPage} isAuthorized={isAuthorized} userData={userData} />
				<PrivateRoute path="/history" exact component={HistoryPage} isAuthorized={isAuthorized} userData={userData} />
				<Route path="/login" component={LoginPage} />
			</Switch>
		</div>
	);
};

export default Routes;
