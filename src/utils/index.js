export const isOperator = (val) => {
	return !isNaN(val) || val === '.' || val === '=';
};
