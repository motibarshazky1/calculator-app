import React, { useState } from 'react';

import Key from '../../components/Key';
import './index.css';

const keyboard = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

const CalculatorPage = () => {
	const [result, setResult] = useState('');

	return (
		<div className="calc-wrapper">
			<div className="calc">
				<div className="result">{result}</div>
				<div className="key-row">
					{keyboard.slice(0, 4).map((key, i) => (
						<Key key={key} value={key} />
					))}
				</div>
				<div className="key-row">
					{keyboard.slice(4, 8).map((key, i) => (
						<Key key={key} value={key} />
					))}{' '}
				</div>
				<div className="key-row">
					{keyboard.slice(8, 12).map((key, i) => (
						<Key key={key} value={key} />
					))}{' '}
				</div>
				<div className="key-row">
					{keyboard.slice(12, 16).map((key, i) => (
						<Key key={key} value={key} />
					))}{' '}
				</div>
			</div>
		</div>
	);
};

export default CalculatorPage;
