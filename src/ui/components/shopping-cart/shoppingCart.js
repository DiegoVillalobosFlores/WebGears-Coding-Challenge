import React, { useContext } from 'react';
import { store } from '../../../store';
import { PRODUCT_UPDATE } from '../../../store/inventory';
import CartItem from './cartItem';

const ShoppingCart = () => {
	const { state: globalState, dispatch } = useContext(store);
	const { inventory } = globalState;

	return (
		<div className='Container cart'>
			<h1 className='ContainerTitle'>Shopping Cart</h1>
			{inventory.data
				.filter(({ cart }) => cart > 0).map(product => (
					<CartItem
						key={product.id}
						product={product}
						onDelete={() => dispatch({ type: PRODUCT_UPDATE, data: {...product, cart: 0} })}
					/>
				))}
		</div>
	);
};

export default ShoppingCart;
