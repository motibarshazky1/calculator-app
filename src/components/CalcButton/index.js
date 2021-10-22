import React from 'react';
import './index.css';

import { isOperator } from '../../utils';

const CalcButton = ({ value, handleClick }) => (
	<div className={`button-wrapper ${isOperator(value) ? null : 'operator'}`} onClick={() => handleClick(value)}>
		{value}
	</div>
);

export default CalcButton;
