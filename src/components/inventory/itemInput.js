import React from 'react';
import { string, func } from 'prop-types';

const ItemInput = ({ placeholder, type, value, className }) => (
	<input placeholder={placeholder} type={type} value={value} className={className}/>
);

ItemInput.defaultProps = {
	placeholder: '',
	type: 'text',
	onChange: () => {},
	onClick: () => {},
};

ItemInput.propTypes = {
	value: string.isRequired,
	className: string.isRequired,
	placeholder: string,
	type: string,
	onChange: func,
	onClick: func
};

export default ItemInput;
