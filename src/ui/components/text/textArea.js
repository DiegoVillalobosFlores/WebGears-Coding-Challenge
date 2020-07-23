import React from 'react';
import { string, func } from 'prop-types';

const TextArea = ({ placeholder, value, className, onChange }) => {
	return (
		<textarea value={value} onChange={onChange} placeholder={placeholder} className={className}/>
	);
};

TextArea.defaultProps = {
	className: ''
};

TextArea.propTypes = {
	placeholder: string.isRequired,
	value: string.isRequired,
	className: string,
	onChange: func.isRequired,
};

export default TextArea;
