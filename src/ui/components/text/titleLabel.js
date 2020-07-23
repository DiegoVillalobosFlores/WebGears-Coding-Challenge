import React from 'react';
import { any, string } from 'prop-types';

const TitleLabel = ({ className, children }) => (
	<h1 className={className}>
		{children}
	</h1>
);

TitleLabel.defaultProps = {
	className: ''
};

TitleLabel.propTypes = {
	children: any.isRequired,
	className: string,
};

export default TitleLabel;
