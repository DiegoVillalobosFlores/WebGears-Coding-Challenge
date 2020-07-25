import React from 'react';
import { string, func } from 'prop-types';

const defaultFunc = () => {};

const Input = ({ placeholder, type, value, field, className, onClick, onChange }) => {

	const handleChange = (e) => {
		onChange(field, e.target.value);
	};

	return (
		<input
			placeholder={placeholder}
			type={type}
			value={value}
			className={className}
			onClick={onClick}
			onChange={handleChange}
		/>
	);
};

Input.defaultProps = {
	placeholder: '',
	type: 'text',
	field: '',
	onChange: defaultFunc,
	onClick: defaultFunc,
};

Input.propTypes = {
	value: string.isRequired,
	className: string.isRequired,
	field: string,
	placeholder: string,
	type: string,
	onChange: func,
	onClick: func
};

export default Input;
