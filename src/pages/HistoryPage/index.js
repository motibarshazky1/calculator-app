import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../actions/envActions';

import { clearUserClicksHistory } from '../../actions/userActions';
import Modal from '../../components/AppModal';

import './index.css';

const HistoryPage = () => {
	const dispatch = useDispatch();
	const { userClicks } = useSelector((state) => state.user);
	const { error, isModalOpen } = useSelector((state) => state.environment);

	const onClickClearHistory = () => {
		const isClearSuccessfully = dispatch(clearUserClicksHistory());
		if (!isClearSuccessfully) {
			dispatch(toggleModal('Error While Trying To Clear Clicks History! Please Try Again'));
		}
	};

	const onCloseModal = () => {
		dispatch(toggleModal());
	};

	return (
		<div className="history-wrapper">
			{error && isModalOpen && <Modal open={isModalOpen} onClose={onCloseModal} error={error} />}

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
