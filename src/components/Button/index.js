import React from 'react';
import './index.css';

const isOperator = (val) => {
	return !isNaN(val) || val === '.' || val === '=';
};

const Button = ({ value, handleClick }) => (
	<div className={`button-wrapper ${isOperator(value) ? null : 'operator'}`} onClick={() => handleClick(value)}>
		{value}
	</div>
);

export default Button;