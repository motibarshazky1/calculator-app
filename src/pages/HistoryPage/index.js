import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUserClicksHistory } from '../../actions/userActions';

import './index.css';

const HistoryPage = () => {
	const dispatch = useDispatch();
	const { userClicks } = useSelector((state) => state.user);

	const onClickClearHistory = () => {
		dispatch(clearUserClicksHistory());
	};

	return (
		<div className="history-wrapper">
			<div className="history-title">Your last 20 clicks:</div>
			{userClicks && userClicks.length
				? userClicks.map((click, index) => (
						<div className="history-row">
							<span className="click-index">{index + 1}.</span> {click}
						</div>
				  ))
				: null}
			{userClicks && userClicks.length ? (
				<button className="button clear-history" onClick={onClickClearHistory}>
					Clear History
				</button>
			) : null}
		</div>
	);
};

export default HistoryPage;
