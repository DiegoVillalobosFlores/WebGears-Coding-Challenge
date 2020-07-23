import React from 'react';
import { number, string } from 'prop-types';

import '../../styles/shoppingCart.css';

const TotalLabel = ({ total, className }) => {
	return (
		<div className={className}>
			<p>Total: </p>
			<p>{total}$</p>
		</div>
	);
};

TotalLabel.defaultProps = {
	className: ''
};

TotalLabel.propTypes = {
	total: number.isRequired,
	className: string,
};

export default TotalLabel;
