export const isOperator = (val) => {
	return !isNaN(val) || val === '.' || val === '=';
};

export const onCloseModal = (setIsModalOpen, setError) => {
	setIsModalOpen(false);
	setError('');
};
