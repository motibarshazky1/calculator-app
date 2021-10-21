import React, { useState } from 'react';

import './index.css';
import Button from '../../components/Button';
import CalcInput from '../../components/CalcInput';

import { evaluate } from 'mathjs';

const keyboard = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '+', 'C', 0, '=', '-'];

const CalculatorPage = () => {
	const [calcInput, setCalcInput] = useState('');

	const addToInput = (val) => {
		if (val === 'C') {
			setCalcInput('');
		} else if (val === '=') {
			handleEqual();
		} else {
			setCalcInput(calcInput + val);
		}
	};

	const handleEqual = () => {
		console.log(evaluate(calcInput));
		setCalcInput(evaluate(calcInput));
	};

	return (
		<div className="calc-wrapper">
			<CalcInput input={calcInput} />
			<div className="key-row">
				{keyboard.slice(0, 4).map((key) => (
					<Button handleClick={addToInput} value={key} key={key} />
				))}
			</div>
			<div className="key-row">
				{keyboard.slice(4, 8).map((key) => (
					<Button handleClick={addToInput} value={key} key={key} />
				))}
			</div>
			<div className="key-row">
				{keyboard.slice(8, 12).map((key) => (
					<Button handleClick={addToInput} value={key} key={key} />
				))}
			</div>
			<div className="key-row">
				{keyboard.slice(12, 16).map((key) => (
					<Button handleClick={addToInput} value={key} key={key} />
				))}
			</div>
		</div>
	);
};

export default CalculatorPage;
