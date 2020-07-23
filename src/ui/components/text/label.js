import React from 'react';
import { any, string } from 'prop-types';

const Label = ({ children, className }) => (
	<p className={className}>
		{children}
	</p>
);

Label.defaultProps = {
	className: ''
};

Label.propTypes = {
	children: any.isRequired,
	className: string,
};

export default Label;
