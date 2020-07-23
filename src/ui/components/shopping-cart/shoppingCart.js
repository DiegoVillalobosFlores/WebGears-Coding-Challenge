import React, { useContext } from 'react';
import { store } from '../../../store';
import { PRODUCT_UPDATE } from '../../../store/inventory';
import CartItem from './cartItem';
import Total from './total';

const ShoppingCart = () => {
	const { state: globalState, dispatch } = useContext(store);
	const { inventory } = globalState;

	const cart = inventory.data
		.reduce((acc, p) => {
			if(p.inCart < 1) return  acc;
			return  ({ total: acc.total + p.price * p.inCart, items: [...acc.items, p]});
		},{ total: 0, items: []});

	return (
		<div className='Container cart'>
			<h1 className='ContainerTitle'>Shopping Cart</h1>
			{cart.items.map(product => (
				<CartItem
					key={product.id}
					product={product}
					onDelete={() => dispatch({ type: PRODUCT_UPDATE, data: {...product, inCart: 0} })}
				/>
			))}
			{
				cart.total > 0 && <Total total={cart.total}/>
			}
		</div>
	);
};

export default ShoppingCart;
