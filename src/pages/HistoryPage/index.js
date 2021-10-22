import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearUserClicksHistory } from '../../actions/userActions';
import { onCloseModal } from '../../utils';
import Modal from '../../components/AppModal';

import './index.css';

const HistoryPage = () => {
	const dispatch = useDispatch();
	const { userClicks } = useSelector((state) => state.user);

	const [error, setError] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onClickClearHistory = () => {
		const isClearSuccessfully = dispatch(clearUserClicksHistory());
		if (!isClearSuccessfully) {
			setError('Error While Trying To Clear Clicks History! Please Try Again');
			setIsModalOpen(true);
		}
	};

	return (
		<div className="history-wrapper">
			{error && isModalOpen && (
				<Modal open={isModalOpen} onClose={() => onCloseModal(setIsModalOpen, setError)} error={error} />
			)}

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
