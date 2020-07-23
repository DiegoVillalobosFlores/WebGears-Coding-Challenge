import React from 'react';
import { string, func } from 'prop-types';

const TextArea = ({ placeholder, value, field, className, onChange }) => {

	const handleChange = e => {
		onChange(field, e.target.value);
	};

	return (
		<textarea value={value} onChange={handleChange} placeholder={placeholder} className={className}/>
	);
};

TextArea.defaultProps = {
	className: '',
	field: '',
};

TextArea.propTypes = {
	placeholder: string.isRequired,
	value: string.isRequired,
	field: string,
	className: string,
	onChange: func.isRequired,
};

export default TextArea;
