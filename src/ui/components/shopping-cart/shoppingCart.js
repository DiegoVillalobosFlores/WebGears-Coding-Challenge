import React, { useContext } from 'react';
import { store } from '../../../store';

const ShoppingCart = () => {
	const { state: globalState } = useContext(store);
	const { inventory } = globalState;

	return (
		<div className='Container cart'>
			<h1 className='ContainerTitle'>Shopping Cart</h1>
			{inventory.data
				.filter(({ cart }) => cart > 0).map(item => (
					<div key={item.id}>
						{item.title}
						{item.cart}
					</div>
				))}
		</div>
	);
};

export default ShoppingCart;
