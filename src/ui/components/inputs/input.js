import React from 'react';
import { string, func } from 'prop-types';

const Input = ({ placeholder, type, value, className, onClick, onChange }) => (
	<input
		placeholder={placeholder}
		type={type} value={value}
		className={className}
		onClick={onClick}
		onChange={onChange}
	/>
);

Input.defaultProps = {
	placeholder: '',
	type: 'text',
	onChange: () => {},
	onClick: () => {},
};

Input.propTypes = {
	value: string.isRequired,
	className: string.isRequired,
	placeholder: string,
	type: string,
	onChange: func,
	onClick: func
};

export default Input;
