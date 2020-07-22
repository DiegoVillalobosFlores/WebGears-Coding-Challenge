import React from 'react';
import { number } from 'prop-types';

import '../../styles/shoppingCart.css';

const Total = ({ total }) => {
	return (
		<div className='CartTotalContainer'>
			<p>Total: {'\t'}</p>
			<p>{total}$</p>
		</div>
	);
};

Total.propTypes = {
	total: number.isRequired,
};

export default Total;
