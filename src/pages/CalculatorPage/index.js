import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { evaluate } from 'mathjs';

import CalcButton from '../../components/CalcButton';
import CalcInput from '../../components/CalcInput';
import Modal from '../../components/AppModal';
import { addUserClick } from '../../actions/userActions';
import { isOperator } from '../../utils';

import './index.css';

const keyboard = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '+', 'C', 0, '=', '-'];

const CalculatorPage = () => {
	const dispatch = useDispatch();
	const { userCalcInput } = useSelector((state) => state.user);
	const [calcInput, setCalcInput] = useState(userCalcInput);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		if (calcInput === Infinity || undefined) {
			setError('Your Formula Is Illegal');
			setIsModalOpen(true);
			setCalcInput('');
		}
	}, [calcInput]);

	const addToInput = (val) => {
		let newInput = calcInput || '';
		if (val === 'C') {
			newInput = '';
		} else if (val === '=') {
			newInput = handleEqual();
		} else if (calcInput && !isOperator(val) && !isOperator(calcInput.toString().charAt(calcInput.length - 1))) {
			// 2 straight operators - ignore the click
			return;
		} else if (!isOperator(val) && val !== '=') {
			newInput = calcInput + val;
		} else {
			if (calcInput) {
				newInput = calcInput.toString() + val.toString();
			} else {
				newInput = val.toString();
			}
		}
		setCalcInput(newInput);
		dispatch(addUserClick(val, newInput));
	};

	const handleEqual = () => {
		if (calcInput && calcInput.length > 1) {
			if (isOperator(calcInput.charAt(calcInput.length - 1))) {
				return evaluate(calcInput);
			}
		} else {
			return calcInput;
		}
	};

	const onCloseModal = () => {
		setIsModalOpen(false);
		setError('');
	};

	return (
		<div className="calc-wrapper">
			{error && isModalOpen && <Modal open={isModalOpen} onClose={onCloseModal} error={error} />}
			<CalcInput input={calcInput} />
			<div className="key-row">
				{keyboard.slice(0, 4).map((key) => (
					<CalcButton handleClick={addToInput} value={key} key={key} />
				))}
			</div>
			<div className="key-row">
				{keyboard.slice(4, 8).map((key) => (
					<CalcButton handleClick={addToInput} value={key} key={key} />
				))}
			</div>
			<div className="key-row">
				{keyboard.slice(8, 12).map((key) => (
					<CalcButton handleClick={addToInput} value={key} key={key} />
				))}
			</div>
			<div className="key-row">
				{keyboard.slice(12, 16).map((key) => (
					<CalcButton handleClick={addToInput} value={key} key={key} />
				))}
			</div>
		</div>
	);
};

export default CalculatorPage;
